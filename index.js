var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var fs = require('fs')
var r = require('rethinkdb')
var uuid = require('uuid')
var _ = require('lodash')
var config = require(__dirname + '/config.js') // TODO path this
// var template = mustache.compile('string of mustache');
// var result = template(locals);

console.log('welcome to the szenograph backend')
app.use(express.static(__dirname + '/assets'))
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(function(req, res, next) {
    r.connect(config.rethinkdb, function(err, conn) {
        if(err) return next(err)

        req.app._rdbConn = conn
        next()
    })
})

//delete me !
/*var examples = [{
	id: "270f74c7-0081-434d-9048-e6394af04129",
	name: "Die Le von Malta",
	preview_img: "img/example_placeholder.png",
	description: "Le Ipsum",
	input: [],
	outputs: [],
	tags: '["le", "van", "ping", "pong"]'
},
{
    id: "270f74c7-0082-434d-9048-e6394af04129",
    name: "Die Dennis von Malta",
    preview_img: "img/example_placeholder.png",
    description: "Dennis Ipsum",
    input: [],
    outputs: [],
    tags: '["den", "nis", "tim", "mer", "mann"]'
}]*/

// adding template engine
// app.engine('mu', function(filePath, options, callback) {
//     fs.readFile(filePath, function(err, content) {
//         if(err) return callback(new Error(err))
//
//         var rendered = mustache.render(content.toString(), options.view, options.partials)
//         return callback(null, rendered)
//     })
// })
app.engine('mu', require('hogan-express'))
app.set('views', './views')
app.set('view engine', 'mu')

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/lexikon', function (req, res) {
  //
})

/*app.get('/examples', function (req, res) {
    res.locals = {
        test:'hi',
        list: examples
    }
    res.render('examples', {
        partials: {'header': 'header'}
    })
})*/

app.get('/configurator', function (req, res) {
  //
})

app.get('/about', function (req, res) {
    // res.send('Hello About!');
    res.render('about', {
        partials: {'header': 'header'}
    })
})

app.get('/admin', function (req, res) {
    res.render('admin', {
    })
})

// app.get('/admin/input', function(req, res) {
//
// })


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
var inputGetById = function(id) {
    r.table('inputs').get(id).run(req.app._rdbConn, function(err, result) {
        if(err) return next(err)
        res.json(result)
    })
}
var inputGetAll = function() {
    r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)
        res.json(result)
    })
}
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
            // res.send('hi')
            // showInputDetail(req, res, function(requested) {
            //     res.render('admin_inputs_detail', {
            //         'view': {
            //             data: requested,
            //             debug: JSON.stringify(result.changes[0].new_val)
            //         }
            //     })
            // })
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
        console.log(req.body)
        req.body.tags = _.trim(req.body.tags, ',').split(',')
        req.body.examples = _.trim(req.body.examples, ',').split(',')
        console.log(req.body)
        r.table('inputs').get(req.params.id).update(req.body, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)

            // res.json(result.changes[0].new_val);
            inputShowInputDetail(req, res, function(requested) {
                res.locals = {
                    data: requested,
                    debug: "Änderungen erfolgreich gespeichert!"
                }
                res.render('admin_inputs_detail', {
                })
            })
        });
        // console.log(req.params)
        // res.send(req.params.items)
    })

//////////////// _________________________________ ADMIN EXAMPLES

app.route('/admin/examples')
    .get(function(req, res, next) {
        console.log('imma here examples')
        r.table('examples').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, result) {
                if(err) return next(err)

                // res.json(result)
                res.locals = {
                    list: result
                }
                res.render('admin_examples', {})
            })
        })
    })
var exampleGetById = function(id) {
    r.table('examples').get(id).run(req.app._rdbConn, function(err, result) {
        if(err) return next(err)
        res.json(result)
    })
}
var exampleGetAll = function() {
    r.table('examples').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)
        res.json(result)
    })
}
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

            // console.log(requested)

            callback(requested)
        })
    })
}
var exampleShowInputDetail = function(req, res, callback) {
    r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
        cursor.toArray(function(err, inputs) {
            console.log()
        })
    })
}
var exampleShowExampleDetailPage = function(req, res, callback) {
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
        /*cursor.toArray(function(err, results) {
            if(err) return next(err)
            callback(results)
        })*/
    })
}
app.route('/admin/examples/add')
    .get(function(req, res, next) {
        var n = {id: uuid.v4()}
        r.table('examples').insert(n, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
            if(err) return next(err)
            res.redirect(302, '/admin/examples/'+n.id)
            // res.send('hi')
            // showInputDetail(req, res, function(requested) {
            //     res.render('admin_inputs_detail', {
            //         'view': {
            //             data: requested,
            //             debug: JSON.stringify(result.changes[0].new_val)
            //         }
            //     })
            // })
        })
    })
app.route('/admin/examples/:id')
    .get(function(req, res, next) {
        exampleShowExampleDetail(req, res, function(requested) {
            res.locals = {
                data: requested
            }
            res.render('admin_examples_detail', {
            })
        })
        exampleShowInputDetail(req, res, function(requested) {
            res.locals = {
                data: requested
            }
            res.render('admin_examples_detail', {
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

            // res.json(result.changes[0].new_val);
            exampleShowExampleDetail(req, res, function(requested) {
                res.locals = {
                    data: requested,
                    debug: "Änderungen erfolgreich gespeichert!"
                }
                res.render('admin_examples_detail', {
                })
            })
        });
        // console.log(req.params)
        // res.send(req.params.items)
    })

//////////////// _________________________________ EXAMPLES

app.route('/examples')
    .get(function(req, res, next) {
        console.log('imma here examples')
        r.table('examples').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, examples) {
                if(err) return next(err)

                res.locals = {
                    list: examples
                }
                res.render('examples', {
                    partials: {'header': 'header'}
                })
            })
        })
    })

app.route('/examples/:id')
    .get(function(req, res, next) {
        exampleShowExampleDetailPage(req, res, function(results) {
            console.log("IMMA HERE EXAMPLE DETAILS")
            res.locals = {
                data: results
            }
            res.render('examples_detail', {
                partials: {'header': 'header'}
            })
        })
    })

// app.route('/admin/inputs/:id')
//     .get()
//     .put()
//     .delete()

app.use(function(req, res, next) {
    req.app._rdbConn.close()
})

app.listen(config.express.port, function () {
  console.log('szenograph listening on port',config.express.port);
});
