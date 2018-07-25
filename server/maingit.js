const Git = require("nodegit");
const express = require("express");

var getMostRecentCommit = function(repository) {
  return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
  return commit.message();
};

var router = express.Router();
var pathToRepo = require("path").resolve("./.git");


// define the about route
router.get('/about', function (req, res) {
  res.send('About gbg');
})

router.get('/repo', function (req, res) {
  Git.Repository.open(pathToRepo)
  .then(getMostRecentCommit)
  .then(getCommitMessage)
  .then(function(message) {
    res.send(message);
  });
});  

module.exports = router;