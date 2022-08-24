const express = require('express');
const app = express();
const port = 8000;

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
step2: npm install express */

/* to makke it the git repository to track all the changes
step1: git init
step2: git add .   //to add all files into the git
step3: git commit -m "comment"    //to add comment
step4: git status            //to check the status
step5: git log              //to know previous commit
step6: git branch -M main
step7: git remote add origin git@github.com:AbhayRanjan471/demo.git
step8 : git push -u origin main     //to push the file into git

step2: git add .
step3: git commit -m "comment"
step8 : git push -u origin main


*/