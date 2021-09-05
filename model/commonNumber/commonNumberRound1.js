const mongoose = require('mongoose')
const round1Schema = new mongoose.Schema({
    Date: String,
    Direct: String,
    House: String,
    Ending: String,
})

module.exports = mongoose.model('Round1CommonNumber', round1Schema)