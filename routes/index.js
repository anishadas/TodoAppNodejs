var express = require("express");
var router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/', homeController.home);
router.get('/info', homeController.info);

module.exports = router;