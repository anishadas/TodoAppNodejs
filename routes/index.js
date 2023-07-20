var express = require("express");
var router = express.Router();
const homeController = require('../controller/home_controller');

// all localhost:8000/ - move to home_controller
router.get('/', homeController.home);
router.get('/info', homeController.info);

// localhost:8000/users - will move to users.js
router.use('/users', require('./users'));

module.exports = router;