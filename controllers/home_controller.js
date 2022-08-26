function home(req , res){
    //return res.end('<h1>Express is up Codeal!</h1>');
    return res.render('home', {
        title: "Home"
    });
}
//exporting the module so that other file can use it
module.exports = {home};
      
//alternate way to export the funciton
//Syntex: module.exports.actionName = function(req, res){}
// module.exports.home = function(req, res){
//     return res.end('<h1>Express is up Codeal!</h1>')
// }