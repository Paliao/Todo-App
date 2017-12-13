const mongoose = require('mongoose')
mongoose.Promise = global.Promise // To mongoose promise use the promise db of the node
module.exports = mongoose.connect('mongodb://localhost/todo')