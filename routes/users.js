var express = require("express");
var router = express.Router();
const usersController = require('../controller/users_controller');


// localhost:8000/users/profile
router.get('/profile', usersController.profile);
router.get('/reports', usersController.reports);

router.use('/posts', require('./posts'));

module.exports = router;