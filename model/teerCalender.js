const mongoose = require('mongoose')
const teerCalenderSchema = mongoose.Schema({
    date: String,
    day: {
        type: String,
        enum: ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        default: 'Monday'
    },
   
     dayteer: {
         type: String,
             enum: ['Yes', 'No'],
             default: 'No'
     },
      nightteer: {
          type: String,
          enum: ['Yes', 'No'],
          default: 'No'
      },
   
})
module.exports = mongoose.model('teercalender', teerCalenderSchema)