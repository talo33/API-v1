var express = require('express');
var router = express.Router();

var User = require('../models/user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/black-list', function(req, res, next) {
  res.send('Black-list: .........');
});

router.post('/create', cretaeUser = async(req,res) => {
  const user =  await User.create({
    username: req.body.username,
    //email: 'thanhloc@gmail.com',
    password: req.body.password,
  });
  res.status(200).json(user);
  
})

router.get('/list', listUser = async(req,res) => {
  const listUser =  await User.find({
    // username: req.body.username,
    // //email: 'thanhloc@gmail.com',
    // password: req.body.password,
  });
  res.json(listUser);
  
})

router.post('/login', loginUser = async(req,res, err) => {
  const login =  await User.findOne({
    username: req.body.username,
    // //email: 'thanhloc@gmail.com',
    password: req.body.password,
  });
    // if (err) return res.status(500).send(err);
    // const response = {
    //     message: "User not found"
    // };

    if(login){
      return res.status(200).json({
        login, message: "Success"
      });
    }else {
      return res.status(404).json({
        login, message: "Error"
      });
    }
  
})

router.delete('/delete-user', cretaeUser = async(req,res) => {
  const user =  await User.findByIdAndRemove({
    _id: req.query.id,
  });

  res.json({
    mess: 'delete success!',
    //user
  });
  console.log('dad ', req.query.id)
  
})



module.exports = router;
