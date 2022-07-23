const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    cardNo:
    {
        type: String
    },
    query:
    {
        type: Object,
    },
    assignedStatus: {
        type: String,
        default: 'Not Assigned'
    }
}, {
    timestamps: true
})


const Card = mongoose.model('Card', CardSchema)

module.exports = Card