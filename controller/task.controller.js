const Task = require('../models/task.model')
const { sendMail } = require('../utility/email.utility')

//create task
const createTask = async (req, res) => {
    try {
        const taskBody = req.body
        const newTask = new Task({
            description: taskBody.description,
            owner: taskBody.assignedTo,
            cardNo: taskBody.cardNo
        })
        await newTask.save()

        sendMail(taskBody.assignedTo, cardNo, taskBody.description)

        return res.send({ success: true, code: 200, message: 'Task Created' })
    } catch (e) {
        console.log('CATCH BLOCK createTask error', e)
        return res.send({ success: false, code: 500, message: 'Internal Server Error' })
    }
}

//update Task
const updateTask = async (req, res) => {
    try {
        if (req.user.department !== 'B') {
            return res.send({ success: false, code: 400, message: 'Unauthorized' })
        }

        const updateBody = req.body

        await Task.updateOne({ cardNo: updateBody.cardNo }, { $set: { feedback: updateBody.feedback, completed: 'Done' } })

        return res.send({ success: true, code: 200, message: 'Task Updated' })
    } catch (e) {
        console.log('CATCH Block updateTask', e)
        return res.send({ success: false, code: 500, message: 'Internal Server Error' })
    }
}

//get task
const getTask = async (req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user.email }).sort({ updatedAt: -1 })

        return res.send({ success: true, code: 200, data: tasks })
    } catch (e) {
        console.log('CATCH BLOCK getTask error', e)
        return res.send({ success: false, code: 500, message: 'Internal Server Error' })
    }
}

const getAllTask = async (req, res) => {
    try {
        const task = await Task.find({})
        return res.send({ success: true, code: 200, data: task })
    } catch (e) {
        console.log('CATCH BLOCK getAllTask error', e)
        return res.send({ success: false, code: 500, message: 'Internal Server Error' })
    }
}
module.exports = {
    createTask,
    updateTask,
    getTask,
    getAllTask
}