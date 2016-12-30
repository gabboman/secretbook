var models  = require('../models');
var express = require('express');
var router  = express.Router();
//cosas de login con bcrypt:

var bcrypt = require('bcrypt');
const saltRounds = 10;//Mas cpu, mas seguridad. we should choose


//fin cosas login
router.get('/', function(req, res) {
    res.render('login', {
      
      exito: false
    });
});

router.post('/login', function(req, res) {


usuario=req.body.username
password= req.body.password
models.User.findOne({where:{username:{like:usuario}}}).then(function(fullUser){
//si el usuario no está registrado
if(fullUser == undefined){
  res.render('login', {
      
      exito: false
    });
}else{
console.log(fullUser)
bcrypt.compare(password, fullUser.password, function(err, isPasswordCorrect) {

   res.render('login', {
      
      exito: isPasswordCorrect
    });
});

}



})

  

});

module.exports = router;
