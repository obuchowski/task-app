const tasksRef = require('./task.js');

// create a new task
const newTask = {
    completed: false,
    description: 'Write example code',
    owner: 'user1234',
};

// tasksRef.add(newTask).then((docRef) => {
//     console.log(`Task added with ID: ${docRef.id}`);
// })
tasksRef.get().then((snapshot) => {
    console.log(JSON.stringify(snapshot))
    snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
    });
})

//
// // update a task
// const taskRef = tasksRef.doc('task123');
// taskRef.update({
//     completed: true,
// }).then(() => {
// console.log('Task updated');
// })
//
// // delete a task
// taskRef.delete().then(() => {
// console.log('Task deleted');
// })