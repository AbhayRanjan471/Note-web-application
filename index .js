const express = require('express');
const app = express();
const port = 8000;

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

 