const express = require('express');
const router = express.Router(); //create a router instance

const userController = require('../Controllers/UserController'); //import the user controller

//define the routes
router.post('/createuser', userController.createUser);
router.post('/loginuser', userController.loginUser);

//export the router to be used in other files
module.exports = router;