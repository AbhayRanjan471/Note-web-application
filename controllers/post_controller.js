//  function Post(req, res){
//     return res.send('<h1>Post page</h1>');
// }
// module.exports = {Post};

const TodoList = require('../models/todolist');


//when the form will be submitted the data should come here
module.exports.posts = function(req , res){
    console.log("inside post")
    //using Schema
    //pushing it into the database or my collection for which my Schema has been generated
    TodoList.create({
        discription: req.body.discription,
        category: req.body.category,
        date: req.body.date
    }, function(err, newList){
        if(err){
            console.log('error in creating a contact');
            return;
        }

        console.log('*******', newList);
        return res.redirect('back');
    });
    //return res.redirect('/'); // redirecting it to the home page
    // OR (when we didn't remember that from which page we are coming we can use 'back')
   // return res.redirect('back');
};
 