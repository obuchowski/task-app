const express = require('express')
const serverless = require('serverless-http')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('<h2>Welcome to Task App!</h2>')
})
app.use(userRouter)
app.use(taskRouter)

app.use('/.netlify/functions/app', userRouter)
app.use('/.netlify/functions/app', taskRouter)

if (process.env.NODE_ENV === 'local') {
    app.listen(process.env.PORT, () => {
        console.log('Server is up on port ' + process.env.PORT)
    })
}

module.exports.handler = serverless(app)