const nodeGit = require("nodegit");
const express = require("express");

var getMostRecentCommit = function(repository) {
  return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
  return commit.message();
};

var router = express.Router();
var pathToRepo = require("path").resolve("../.git");


async function getAllCommits() {
  try {
    const repo = await nodeGit.Repository.open(pathToRepo);
    const repoRev = repo.createRevWalk();
    const headCommit = await repo.getHeadCommit();
    repoRev.sorting(nodeGit.Revwalk.SORT.TIME);
    repoRev.push(headCommit.id());
    const  commits = await repoRev.getCommits();
    return commits;
  } catch (error) {
    console.log(error);
  }
}

async function getAllCommitsMsgs() {
  const commits = await getAllCommits();
  return commits.map((c) => c.message()).reduce((acc, cur) => acc + " -- " + cur);
}

async function getAllCommitsIds() {
  const commits = await getAllCommits();
  return commits.map((c) => c.id()).reduce((acc, cur) => acc + " -- " + cur);
}

async function getSpecificCommit(id) {
  const commits = await getAllCommits();
  const commit = await commits.find(function(c) {
    return c.id().localeCompare(id) === 0;
  });
  console.log (commit.message())
}

// define the about route
router.get('/about', function (req, res) {
  res.send('About gbg');
})

router.get('/repo/msg', async function (req, res) {
        commitMsgs = await getAllCommitsMsgs();
        res.send(commitMsgs);
});

router.get('/repo/id', async function (req, res) {
  commitIds = await getAllCommitsIds();
  //await getSpecificCommit('5dbee7fc3e37fb0f49b6cb98e321fe03c69f6b34');
  res.send(commitIds);
});  

module.exports = router;