var express = require('express');
var router = express.Router();
var config = require('../config');
var _ = require('lodash');
  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/login');
  };

module.exports = function(passport){
  router.get('/', isAuthenticated, function(req, res){
    res.render('desktop.ejs', { user: req.user });
  });
  
  router.get('/config', function (req, res, next) {
    var keys = [
      'kibana_index',
      'default_app_id',
      'shard_timeout'
    ];
    var data = _.pick(config.kibana, keys);
    data.plugins = config.plugins;
    res.json(data);
  });


  router.get('/login', function(req, res) {
    res.render('login');
  });
  router.get('/desktop', function(req, res) {
    res.render('desktop.ejs');
  });
  router.post('/login',
    passport.authenticate('local',{
    successRedirect: '/desktop',
    failureRedirect: '/login'}
  ));
  return router;
}
// module.exports = router;
