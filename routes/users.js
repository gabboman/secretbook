var models  = require('../models');
var express = require('express');
var router  = express.Router();



//cosas de login con bcrypt:

var bcrypt = require('bcrypt');
const saltRounds = 10;//Mas cpu, mas seguridad. we should choose


//fin cosas login


router.post('/create', function(req, res) 

{

  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

models.User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email,
    address: req.body.address,
    wishlist: req.body.wishlist

  }).then(function() {
    res.redirect('/');
  });

});
  
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
