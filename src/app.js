const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
    .set('useUnifiedTopology', true)
    .set('strictQuery', false)
    .set('useFindAndModify', false)
    .set('useCreateIndex', true)

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = {
    app,
    express,
    userRouter,
    taskRouter,
    mongoose
}