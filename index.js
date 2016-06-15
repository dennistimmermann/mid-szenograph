var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var fs = require('fs')
var mustache = require('mustache')
var r = require('rethinkdb')
var uuid = require('uuid')
var _ = require('lodash')
var config = require(__dirname + '/config.js') // TODO path this
// var template = mustache.compile('string of mustache');
// var result = template(locals);

console.log('welcome to the szenograph backend')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(function(req, res, next) {
    r.connect(config.rethinkdb, function(err, conn) {
        if(err) return next(err)

        req.app._rdbConn = conn
        next()
    })
})

// adding template engine
app.engine('mu', function(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if(err) return callback(new Error(err))

        var rendered = mustache.render(content.toString(), options.view, options.partials)
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'mu')

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/lexikon', function (req, res) {
  //
})

app.get('/examples', function (req, res) {
  //
})

app.get('/configurator', function (req, res) {
  //
})

app.get('/about', function (req, res) {
  //
})

// app.get('/admin/input', function(req, res) {
//
// })
app.route('/admin/inputs')
    .get(function(req, res, next) {
        console.log('imma here')
        r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
            if(err) return next(err)

            cursor.toArray(function(err, result) {
                if(err) return next(err)

                // res.json(result)
                res.render('admin_inputs', {
                    'view': {
                        list: result
                    }
                })
            })
        })
    })
var getById = function(id) {
    r.table('inputs').get(id).run(req.app._rdbConn, function(err, result) {
        if(err) return next(err)
        res.json(result)
    })
}
var getAll = function() {
    r.table('inputs').run(req.app._rdbConn, function(err, cursor) {
        if(err) return next(err)
        res.json(result)
    })
}
var showInputDetail = function(req, res, callback) {
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

            // console.log(requested)

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
        showInputDetail(req, res, function(requested) {
            res.render('admin_inputs_detail', {
                'view': {
                    data: requested
                }
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
            showInputDetail(req, res, function(requested) {
                res.render('admin_inputs_detail', {
                    'view': {
                        data: requested,
                        debug: JSON.stringify(result)
                    }
                })
            })
        });
        // console.log(req.params)
        // res.send(req.params.items)
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
