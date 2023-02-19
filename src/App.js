const express = require('express')
const serverless = require('serverless-http');
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

if (process.env.NODE_ENV === 'local') {
    app.listen(process.env.PORT, () => {
        console.log('Server is up on port ' + process.env.PORT)
    })
} else {
    app.use('/.netlify/functions/app', app);
    module.exports.handler = serverless(app);
}
