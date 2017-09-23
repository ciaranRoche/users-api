var User = require('../models/user');
var express = require('express');
var router = express.Router();


// GET /users
// Get a list of users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).json({
        error: "Error listing users: " + err
      });
    }
    res.json(users);
  });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error reading user: " + err
      });
    }

    if (!user) {
      return res.status(404).end();
    }

    res.json(user);
  });
});

// Update a user by ID
router.put('/update/:id', function(req, res) {
  User.findOneAndUpdate({
    _id: req.params.id
  }, req.body, function(err) {
    if (err) {
      return res
        .status(500).json({
          error: "Error updating user: " + err
        });
    }
    res.sendStatus(200);
  });
});

// Delete a user by ID
router.get('/delete/:id', function(req, res) {
  User.findOneAndRemove({
    _id: req.params.id
  }, req.body, function(err) {
    if (err) {
      return res.status(500).json({
        error: "Error deleting user: " + err
      });
    }
    res.sendStatus(200);
  });
});

module.exports = router;