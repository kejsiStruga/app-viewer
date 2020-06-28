var express = require('express');
var router = express.Router();

/* GET apps listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, appName: 'App 1'},
    {id: 2, appName: 'App 2'}
  ]);
});

module.exports = router;