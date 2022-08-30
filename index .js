
const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const bodyparser = require('body-parser');
// const { fchown } = require('fs');

const app = express();
const port = 8000;

//middleware
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));
//middleware can be used to manipulate data, we can change data
app.use(express.urlencoded());
//It will go into the directory and find out the file name 'assets' , the assets file may contains (html , css, js, image) files
app.use(express.static('assets'))

//this is used to parse the Post request
app.use(bodyparser.urlencoded({ extended: true }));

//use express router
app.use('/', require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');






app.listen(port, function(err){
    if(err){
        // console.log('Error: ', err);
             //OR
        console.log(`Error in running the server: ${err}`)// using backtik ``
    }
    console.log(`Server is running on port: ${port}`);
})






/*
step1: npm init
step2: npm install express 
step3: npm install ejs (to use the templates ie, the view engine)
*/ 

/* to makke it the git repository to track all the changes
step1: git init
step2: git add .   //to add all files into the git
step3: git commit -m "comment"    //to add comment
step4: git status            //to check the status
step5: git log              //to know previous commit
step6: git branch -M main
Note: choose the HTTP link
step7: git remote add origin git@github.com:AbhayRanjan471/demo.git
step8 : git push -u origin main     //to push the file into git

step2: git add .
step3: git commit -m "comment"
step8 : git push -u origin main


*/

 