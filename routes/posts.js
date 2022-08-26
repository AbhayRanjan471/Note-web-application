const express = require('express');
const router = express.Router();

console.log('router post is loaded');

const postController = require('../controllers/post_controller');



router.get('/update' , postController.Post);
// router.post('./update', post_Controller.post);

// router.post('/update' , postController.Post , function(req,res){
//     console.log(res)
// });

module.exports = router;