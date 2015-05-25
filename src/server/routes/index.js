var express = require('express');
var router = express.Router();
var config = require('../config');
var _ = require('lodash');

module.exports = function(passport){
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

  router.post('/login',
    passport.authenticate('local',{
    successRedirect: '/desktop.html',
    failureRedirect: '/login'}
  ));
  return router;
}
// module.exports = router;
