const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    completed: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    }
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task