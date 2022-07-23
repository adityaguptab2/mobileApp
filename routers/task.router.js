const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();

const { createTask, getTask, updateTask,getAllTask } = require('../controller/task.controller')


router.post('/task/create', auth, createTask)
router.post('/task/update', auth, updateTask)
router.post('/task/owner', auth, getTask)
router.post('/task/all', auth, getAllTask)


module.exports = router