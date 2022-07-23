const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    description:
    {
        type: String
    },
    completed:
    {
        type: String,
        default: 'Assigned'
    },
    owner: {
        type: Array,
        required: true
    },
    cardNo: {
        type: String
    },
    feedback: {
        type: String
    },
    cardDetail: {
        type: String
    }
}, {
    timestamps: true
})


const Task = mongoose.model('Task', TaskSchema)

module.exports = Task