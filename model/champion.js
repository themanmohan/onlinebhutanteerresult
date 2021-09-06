const mongoose = require('mongoose')
const teerChampionSchema = mongoose.Schema({
    year:String,
    name:String
})
 module.exports = mongoose.model('teerchampion', teerChampionSchema)