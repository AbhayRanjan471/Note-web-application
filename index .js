const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        // console.log('Error: ', err);
             //OR
        console.log(`Error in running the server add: ${err}`)// using backtik ``
    }
    console.log(`Server is running on port: ${port}`);
})






/*
step1: npm init
step2: npm install express */

/* to makke it the git repository to track all the changes
step1: git init
*/