require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('63dfc7f016cdc2b071e45606')
    .then((task) => {
        console.log(task)
        return Task.countDocuments({completed: false})
    })
    .then((count) => console.log(count))
    .catch((e) => console.log(e))