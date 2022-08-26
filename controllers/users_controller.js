//created the module and exported it also

// //for static data
// module.exports.profile = function(req, res){
//     res.end('<h1>User Profile</h1>');
// }

//for dynamic data
module.exports.profile = function(req, res){
    return res.render('users_view' , {
        title: 'Users'
    });
}

