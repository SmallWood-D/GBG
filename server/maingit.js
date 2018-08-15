
const nodeGit = require("nodegit");
const express = require("express");
const path = require("path");

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
  const repo = await nodeGit.Repository.open(pathToRepo);
  const commit = await nodeGit.Commit.lookup(repo, id);
  return commit;
}

async function getStatus(repo) {
  const statuses = await repo.getStatus();
  return statuses.map((f) => f.path().toString() + ':' + f.status().toString()).reduce((acc, cur) => acc + "\n" + cur);
}

async function getCommitFiles(commit) {
  const diffs = await commit.getDiff(); 
  diffs.forEach(element => {
    console.log(element);
  });
  console.log(diff);
}
// define the about route
router.get('/repo/status', async function (req, res) {
  res.write(await getStatus());
  res.end();
})


// define the about route
router.get('/about', function (req, res) {
  res.send('About gbg');
})

router.get('/repo/msgs', async function (req, res) {
        commitMsgs = await getAllCommitsMsgs();
        res.send(commitMsgs);
});

router.get('/repo/comm', async function (req, res) {
  if (Object.keys(req.query).length !== 0) {
    const commit = await getSpecificCommit(nodeGit.Oid.fromString(req.query.id));
    res.write(commit.message() + " ~~ " + commit.id().tostrS() + "\n");    
    await getCommitFiles(commit);
    res.end();
  } else {
    res.status(500).send('Something broke!');
  }
});  

router.get('/repo/ids', async function (req, res) {
  const commitIds = await getAllCommitsIds();
  res.write(commitIds);
  res.end();
});  

async function displayRepoStatus(repo) {
  console.log(repo.path());
  let lastStatus = await repo.getStatus();
  console.log(lastStatus[0].status().toString());

}

module.exports = { router, displayRepoStatus };