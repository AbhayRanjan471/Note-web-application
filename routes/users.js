//same thing for user file as we ahve done in index.js file
const express = require('express');

const router = express.Router();
console.log("router on user");

//import user_controller
const userController = require('../controllers/users_controller')

router.get('/profile', userController.profile);

module.exports = router;