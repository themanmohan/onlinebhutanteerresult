const mongoose = require('mongoose')

const reputedCounterSchema = mongoose.Schema({
    licenseno: Number,
    address: String
})
module.exports = mongoose.model('reputedcounter', reputedCounterSchema)