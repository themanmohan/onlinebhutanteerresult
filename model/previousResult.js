const mongoose = require('mongoose')

const previousResultSchema = mongoose.Schema({
    city: String,
    date: String,
    firstround: String,
    secondround: String
})
module.exports = mongoose.model('prevoiusresult', previousResultSchema)