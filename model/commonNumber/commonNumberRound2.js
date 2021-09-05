const mongoose = require('mongoose')
const round2Schema = new mongoose.Schema({
    Date: String,
    Direct: String,
    House: String,
    Ending: String,
})

module.exports = mongoose.model('Round2CommonNumber', round2Schema)