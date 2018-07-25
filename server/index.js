const express = require("express");
const mainGit = require('./maingit');
 

const app = express();
const router = express.Router();
app.use((req, res, next) => { console.log('Hello World!');next();})
app.use(mainGit);


app.listen(5423, 
    () => console.log('gbg server listening on port 5423!'))