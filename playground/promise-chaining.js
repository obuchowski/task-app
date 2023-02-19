require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('63dff38f1b0f06be639f5e3a', {
//     age: 1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// })
//     .then((user) => console.log(user))
//     .catch((e) => console.log(e))

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}
//
// updateAgeAndCount('63dfdc637e4d0aaeb0649ff4', 2)
//     .then((count) => console.log(count))
//     .catch((e) => console.log(e))

deleteTaskAndCount('63dfe04ddc003566fe620294')
    .then((count) => console.log(count))
    .catch((e) => console.log(e))