let selected = [];
const mongoose = require('mongoose')
// db
const db = require('../config/mongoose');
// collection
const Todos = require('../model/todo');


// localhost:8000
module.exports.home = (req, res) => {
    Todos.find({})
        .then(result => res.render('home', {
            title: "TODO APP",
            todotext: result
        }))
        .catch(err => console.log("error in fetching from db"));
}

// for adding a new todo
module.exports.createTodo = (req, res) => {
 
    console.log("helo", req.body);
    let mydate = req.body.date.split("-");
    console.log(mydate)
    let mon_arr = ["Jan", "Feb", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let newTodo = {
        text: req.body.newtodo,
        isChecked: false,
        calDate: { comp_date: req.body.date, month: mon_arr[parseInt(mydate[1]) - 1], date: mydate[2], year: mydate[0] },
        category: req.body.category
    }
    Todos.create(newTodo).then(result => res.redirect('back'));

}

// for deleting one or multiple selected todos todos
module.exports.deleteTodo = (req, res) => {
    Todos.find({ isChecked: true }).then(result => {
        if (result.length) {
            result.forEach(todo => {
                myObjectId = todo._id;
                myObjectIdString = myObjectId.toString();
                Todos.findByIdAndDelete(myObjectIdString).then(result => console.log("deleted"));
            })
        }
        res.redirect('back')
    });
}

// for selecting one or multiple todo by clicking on check box
module.exports.selectTodo = (req, res) => {
    let id = req.body.id;
    Todos.findById(id)
        .then(result => {
            let newvalues = { isChecked: !result.isChecked };
            Todos.findByIdAndUpdate(id, newvalues).then(response => console.log("updated"))
        })
}

// for getting a todo for editing
module.exports.getTodo = (req, res) => {
    let id = req.params.id;
    // console.log("hello",req.params);
    Todos.findById(id)
        .then(result => {
            res.json([result])
        })
}

// for updating the database after editing
module.exports.editTodo = async (req, res) => {
    let { id: _id } = req.params;
    let { newtodo, category, date } = req.body;
    let mydate = date.split("-");
    let mon_arr = ["Jan", "Feb", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No post with the id : ${_id}`)
    }
    let newTodo = {
        _id,
        text: newtodo,
        isChecked: false,
        calDate: { comp_date: date, month: mon_arr[mydate[2] - 1], date: mydate[1], year: mydate[0] },
        category: category
    }
    const updatedTodo = await Todos.findByIdAndUpdate(_id, newTodo, { new: true });
    res.json(updatedTodo);
}