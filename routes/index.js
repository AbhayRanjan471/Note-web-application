//this index.js is the entry point of all the routes

///import express
const express = require('express');
// const TodoList = require('../models/todolist');
//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
//route is the entry point of all the request from browser , it is the place where u get to know which controlroller function or action is to be called  
const router = express.Router();


//import home_controller
const homeController = require('../controllers/home_controller');
const postController = require('../controllers/post_controller');
const deleteController = require('../controllers/delete_controller');
// const { route } = require('./users');
// const { route } = require('./posts');

console.log('router loaded');

//this route handle the home
router.get('/',homeController.home);

router.post('/description-list', postController.posts);

router.get('/delete-contact/', deleteController.delete);



//Syntex:
// for anyfurther routes, access from here
// router.use('/routerName', require('./routerfile'));

//we need to export so that it's available to other files 
//after exporting this router we will tell the index.js file app to use it
module.exports = router;