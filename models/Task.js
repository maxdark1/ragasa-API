const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    tarea: {
        type: String,
        require: true
    },
    descripcion: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('Task',TaskSchema);