const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 2 << 19
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        // if (!file.originalname.endsWith('.pdf')) {
        //     return cb(new Error('Please upload a PDF'))
        // }

        cb(undefined, true)
    }
})

const errorMiddleWare = (req, res, next) => {
    throw new Error('From middleware')
}
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


// app.use((req, res, next) => {
//     res.status(503).send('maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is up on port ' + process.env.PORT)
})

// const Task = require('./models/task')
// const User = require('./models/user')
const main = async () => {
    const task = await Task.findById('63e8e38890cbad5007431ca5')
    await task.populate('owner')
    console.log(task.owner)

    const user = await User.findById('63edfd5d14a8a38001704f2d')
    await user.populate('tasks')
    console.log(user.tasks)
}

// main()