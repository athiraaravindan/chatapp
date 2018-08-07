var express = require('express');
var router = express.Router();
// var io = require('socket.io-emitter')({ host: 'localhost', port: 6379 });
/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chat', function(req, res,) {
  res.render('chat');
  console.log(msg);
  console.log(mag1);
});

module.exports = router;
