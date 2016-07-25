var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var fs = require('fs')
var r = require('rethinkdb')
var uuid = require('uuid')
var _ = require('lodash')
var config = require(__dirname + '/config.js') // TODO path this

console.log('welcome to the szenograph backend')
app.use(express.static(__dirname + '/assets'))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    r.connect(config.rethinkdb, function(err, conn) {
        if(err) return next(err)

        req.app._rdbConn = conn
        next()
    })
})

app.engine('mu', require('hogan-express'))
app.set('views', './views')
app.set('view engine', 'mu')

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/about', function (req, res) {
    res.render('about', {
        partials: {'header': 'header', 'footer': 'footer'}
    })
})

app.get('/impressum', function (req, res) {
    res.render('impressum', {
        partials: {'header': 'header', 'footer': 'footer'}
    })
})

app.get('/admin', function (req, res) {
    res.render('admin', {
    })
})

//////////////// _________________________________ EXAMPLES

app.route('/configurator')
    .get(function(req, res, next) {
        r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, inputs) {
                if(err) return next(err)

                r.table('outputs').run(req.app._rdbConn, function(err, cursor) {
                    if(err) return next(err)

                    cursor.toArray(function(err, outputs) {
                        if(err) return next(err)

                        r.table('examples').run(req.app._rdbConn, function(err, cursor) {
                            if(err) return next(err)

                            cursor.toArray(function(err, examples) {
                                if(err) return next(err)

                                res.locals = {
                                    inputlist: JSON.stringify(inputs),
                                    outputlist: JSON.stringify(outputs),
                                    examplelist: JSON.stringify(examples)
                                }
                                res.render('configurator', {
                                    partials: {'header': 'header', 'footer': 'footer'}
                                })
                            })
                        })
                    })
                })
            })
        })
    })

//////////////// _________________________________ LEXIKON

app.route('/lexikon')
    .get(function(req, res, next) {
        r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, inputs) {
                if(err) return next(err)

                r.table('outputs').run(req.app._rdbConn, function(err, cursor) {
                    if(err) return next(err)

                    cursor.toArray(function(err, outputs) {
                        if(err) return next(err)

                        res.locals = {
                            inputlist: JSON.stringify(inputs),
                            outputlist: JSON.stringify(outputs),
                        }
                        res.render('lexikon', {
                            partials: {'header': 'header', 'footer': 'footer'}
                        })
                    })
                })
            })
        })
    })

//////////////// _________________________________ EXAMPLES

app.route('/examples')
    .get(function(req, res, next) {
        r.table('examples').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, examples) {
                if(err) return next(err)

                res.locals = {
                    list: examples
                }
                res.render('examples', {
                    partials: {'header': 'header', 'footer': 'footer'}
                })
            })
        })
    })

app.route('/examples/:id')
    .get(function(req, res, next) {
        exampleShowExampleDetailPage(req, res, function(results) {
            res.locals = {
                data: results
            }
            res.render('examples_detail', {
                partials: {'header': 'header', 'footer': 'footer'}
            })
        })
    })

//////////////// _________________________________ ADMIN INPUTS

app.route('/admin/inputs')
    .get(function(req, res, next) {
        console.log('imma here')
        r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, result) {
                if(err) return next(err)

                res.locals = {
                    list: result
                }
                res.render('admin_inputs', {})
            })
        })
    })
var inputShowInputDetail = function(req, res, callback) {
    r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)

        cursor.toArray(function(err, result) {
            if(err || !result) return next(err)

            requested = _.find(result, { 'id': req.params.id})
            if(requested == undefined) return next(new Error('id not found'))

            requested.list = _.map(result, function(value, key) {
                value.checked = _.includes(requested.items, value.id)
                return value
            })

            requested.selected = []
            requested.selected[requested.type] = true

            callback(requested)
        })
    })
}
app.route('/admin/inputs/add')
    .get(function(req, res, next) {
        var n = {id: uuid.v4()}
        r.table('inputs').insert(n, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)
            res.redirect(302, '/admin/inputs/'+n.id)
        })
    })
app.route('/admin/inputs/:id')
    .get(function(req, res, next) {
        inputShowInputDetail(req, res, function(requested) {
            res.locals = {
                data: requested
            }
            res.render('admin_inputs_detail', {
            })
        })
    })
    .post(function(req, res, next) {
        req.body.items = req.body.items || []
        req.body.tags = _.trim(req.body.tags, ',').split(',')
        req.body.examples = _.trim(req.body.examples, ',').split(',')
        r.table('inputs').get(req.params.id).update(req.body, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)

            inputShowInputDetail(req, res, function(requested) {
                res.locals = {
                    data: requested,
                    debug: "Änderungen erfolgreich gespeichert!"
                }
                res.render('admin_inputs_detail', {
                })
            })
        });
    })

//////////////// _________________________________ ADMIN OUTPUT

app.route('/admin/outputs')
    .get(function(req, res, next) {
        console.log('imma here')
        r.table('outputs').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, result) {
                if(err) return next(err)

                res.locals = {
                    list: result
                }
                res.render('admin_outputs', {})
            })
        })
    })
var outputShowOutputDetail = function(req, res, callback) {
    r.table('outputs').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)

        cursor.toArray(function(err, result) {
            if(err || !result) return next(err)

            requested = _.find(result, { 'id': req.params.id})
            if(requested == undefined) return next(new Error('id not found'))

            requested.list = _.map(result, function(value, key) {
                value.checked = _.includes(requested.items, value.id)
                return value
            })

            requested.selected = []
            requested.selected[requested.type] = true

            callback(requested)
        })
    })
}
app.route('/admin/outputs/add')
    .get(function(req, res, next) {
        var n = {id: uuid.v4()}
        r.table('outputs').insert(n, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)
            res.redirect(302, '/admin/outputs/'+n.id)
        })
    })
app.route('/admin/outputs/:id')
    .get(function(req, res, next) {
        outputShowOutputDetail(req, res, function(requested) {
            res.locals = {
                data: requested
            }
            res.render('admin_outputs_detail', {
            })
        })
    })
    .post(function(req, res, next) {
        req.body.items = req.body.items || []
        req.body.tags = _.trim(req.body.tags, ',').split(',')
        r.table('outputs').get(req.params.id).update(req.body, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)

            outputShowOutputDetail(req, res, function(requested) {
                res.locals = {
                    data: requested,
                    debug: "Änderungen erfolgreich gespeichert!"
                }
                res.render('admin_outputs_detail', {
                })
            })
        });
    })

//////////////// _________________________________ ADMIN EXAMPLES

app.route('/admin/examples')
    .get(function(req, res, next) {
        console.log('imma here examples')
        r.table('examples').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, result) {
                if(err) return next(err)

                res.locals = {
                    list: result
                }
                res.render('admin_examples', {

                })
            })
        })
    })
var exampleShowExampleDetail = function(req, res, callback) {
    r.table('examples').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)

        cursor.toArray(function(err, result) {
            if(err || !result) return next(err)

            requested = _.find(result, { 'id': req.params.id})
            if(requested == undefined) return next(new Error('id not found'))

            requested.list = _.map(result, function(value, key) {
                value.checked = _.includes(requested.items, value.id)
                return value
            })

            requested.selected = []
            requested.selected[requested.type] = true

            callback(requested)
        })
    })
}
/*var exampleShowExampleDetail = function(req, res, callback) {
    r.table('examples').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)

        cursor.toArray(function(err, result) {
            if(err || !result) return next(err)

            requested = _.find(result, { 'id': req.params.id})
            if(requested == undefined) return next(new Error('id not found'))

            requested.list = _.map(result, function(value, key) {
                value.checked = _.includes(requested.items, value.id)
                return value
            })

            requested.selected = []
            requested.selected[requested.type] = true

            callback(requested)
        })
    })
}*/
var exampleShowExampleDetailPage = function(req, res, callback) {
    r.table('examples').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)

        cursor.toArray(function(err, result) {
            if(err || !result) return next(err)

            requested = _.find(result, { 'id': req.params.id})
            if(requested == undefined) return next(new Error('id not found'))

            requested.selected = []
            requested.selected[requested.type] = true

            callback(requested)
        })
    })
}
app.route('/admin/examples/add')
    .get(function(req, res, next) {
        var n = {id: uuid.v4()}
        r.table('examples').insert(n, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)
            res.redirect(302, '/admin/examples/'+n.id)
        })
    })
app.route('/admin/examples/:id')
    .get(function(req, res, next) {
        exampleShowExampleDetail(req, res, function(requested) {

            r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
                if(err) return next(err)

                cursor.toArray(function(err, inputs) {
                    if(err) return next(err)

                    r.table('outputs').run(req.app._rdbConn, function(err, cursor) {
                        if(err) return next(err)

                        cursor.toArray(function(err, outputs) {
                            if(err) return next(err)

                            res.locals = {
                                data: requested,
                                inputlist: inputs,
                                outputlist: outputs
                            }
                            res.render('admin_examples_detail', {

                            })
                        })
                    })
                })
            })
        })
    })
    .post(function(req, res, next) {
        console.log(req.body)
        req.body.tags = _.trim(req.body.tags, ',').split(',')
        req.body.examples = _.trim(req.body.examples, ',').split(',')
        console.log(req.body)
        r.table('examples').get(req.params.id).update(req.body, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)

            exampleShowExampleDetail(req, res, function(requested) {
                res.locals = {
                    data: requested,
                    debug: JSON.stringify(req.body)
                }
                res.render('admin_examples_detail', {
                })
            })
        });
    })

app.use(function(req, res, next) {
    req.app._rdbConn.close()
})

app.listen(config.express.port, function () {
  console.log('szenograph listening on port',config.express.port);
});
