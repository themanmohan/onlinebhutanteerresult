const mongoose = require("mongoose")

const predictTargetSchema = mongoose.Schema({
    number: {
        type: String,
        required: true
    },
},{
    capped: {
        size: 1024,
        max: 1,
        autoIndexId: true
    }
})

module.exports = mongoose.model("Predicttarget", predictTargetSchema)