const express = require('express')
const serverless = require('serverless-http')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)

const app = express()
const router = express.Router()

app.use((req, res, next) => {
    mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
        useNewUrlParser: true
    })
    res.on('finish', () => {
        mongoose.connection.close()
    });
    next();
});

router.get('/', (req, res) => {
    res.send('<h2>Welcome to Task App!</h2>')
    res.end()
})
app.use(express.json())

// app.use(userRouter)
// app.use(taskRouter)

app.use('/.netlify/functions/app', router)
// app.use('/.netlify/functions/app', userRouter)
// app.use('/.netlify/functions/app', taskRouter)

if (process.env.NODE_ENV === 'local') {
    app.listen(process.env.PORT, () => {
        console.log('Server is up on port ' + process.env.PORT)
    })
}

module.exports.handler = serverless(app)