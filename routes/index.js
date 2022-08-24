//this index.js is the entry point of all the routes

///import express
const express = require('express');
//import home_controller
const homeController = require('../controllers/home_controller')

//route is the entry point of all the request from browser , it is the place where u get to know which controlroller function or action is to be called  
const router = express.Router();

console.log('router loaded');

router.get('/',homeController.home);

//we need to export so that it's available to other files 
//after exporting this router we will tell the index.js file app to use it
module.exports = router;