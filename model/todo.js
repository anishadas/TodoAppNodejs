const mongoose = require('mongoose');

const todo_schema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean,
        required:true
    },
    calDate: {
        comp_date: {
            type: String,
            required:true
        },
        month: {
            type: String,
            required:true
        },
        date: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },

    },
    category: {
        type: String,
        required:true
    }
});

const Todos = mongoose.model("Todos", todo_schema);

module.exports = Todos;