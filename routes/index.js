var express = require("express");
var router = express.Router();
const homeController = require('../controller/home_controller');


// all localhost:8000/ - move to home_controller
router.get('/', homeController.home);

// for adding a new todo
router.post('/addtodo', homeController.createTodo);

// for deleting one or multiple selected todos todos
router.post('/delete-todo', homeController.deleteTodo);

// for selecting one or multiple todo by clicking on check box
router.post('/select-todo', homeController.selectTodo);

// for getting a todo for editing
router.get('/get-todo/:id', homeController.getTodo);

// for updating the database after editing
router.post('/edit-todo/:id', homeController.editTodo);


module.exports = router;