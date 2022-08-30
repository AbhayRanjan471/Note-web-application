//created the module and exported it also

// //for static data
// module.exports.profile = function(req, res){
//     res.end('<h1>User Profile</h1>');
// }

//for dynamic data
// module.exports.profile = function(req, res){
//     return res.render('users_view' , {
//         title: 'Users'
//     });
// }
const TodoList = require('../models/todolist');


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

