var express = require("express");
var router = express.Router();
const postsController = require('../controller/posts_controller');

// localhost:8000/users/posts/agenda
router.get('/agenda', postsController.agenda);
module.exports = router;