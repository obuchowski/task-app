const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is up on port ' + process.env.PORT)
})