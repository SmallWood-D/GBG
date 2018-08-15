const express = require("express");
const mainGit = require('./maingit');
const nodeGit = require("nodegit");

 

const app = express();
const router = express.Router();
app.use(mainGit.router);


app.listen(5423, 
    async () => {
        const repo = await nodeGit.Repository.open('../.git');
        if (!repo) {
            console.log('repo is null!!!!');
        }

        console.log('gbg server listening on port 5423!');
        await mainGit.displayRepoStatus(repo);
    })