const express = require('express');
const app = express()
require('dotenv').config()
require('./db/databaseService')
const userRouter = require('./routers/user.router')
const taskRouter = require('./routers/task.router')
const port = process.env.PORT
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on the port ' + port)
})