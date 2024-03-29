const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const dishRouter = express.Router()
dishRouter.use(bodyParser.json())

dishRouter.route('/').all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next() // continues to look for additional info
}).get((req, res, next) => {
    res.end('Will send all the dishes to you')
}).post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + "with details: " + req.body.description)
}).put((req, res, next) => {
    res.statusCode = 403
    res.end('this end point does not support PUT method')
}).delete((req, res, next) => {
    res.end('Deleting all dishes')
})

module.exports = dishRouter
