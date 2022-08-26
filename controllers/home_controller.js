// function home(req , res){
//     //return res.end('<h1>Express is up Codeal!</h1>');
//     return res.render('home', {
//         title: "Home"
//     });
// }
const TodoList = require('../models/todolist');

//Returning the page
 function home(req , res){
    console.log('todooossss' );
    // Fetch the contact, using the function find()
    TodoList.find({}, function(err,todos){
        console.log('todooossss' , todos);
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
        //if no error than we will return the response
        return res.render('home', {title: "Todo List",
    todo_list: todos
        });
    });
}

//exporting the module so that other file can use it
module.exports = {home};
      
//alternate way to export the funciton
//Syntex: module.exports.actionName = function(req, res){}
// module.exports.home = function(req, res){
//     return res.end('<h1>Express is up Codeal!</h1>')
// }




 //TO DELETE THE CONTACT
 module.exports.delete = function(req, res){
    //get the id from query in the Url
    let id = req.query.id;

    //find the contcat in the database using the id and delete it
    TodoList.findByIdAndDelete(id, function(err){ // there is no 2nd agrument in the function bcz we are just deleting it
        console.log('deleteee' , id)
        if(err){
            console.log('error in deleting the object from the database');
            return;
        }
        return res.redirect('back');
    });
}