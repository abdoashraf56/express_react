var express = require('express');
var router = express.Router();

var data = [
  {id : 0 , name : "Jon"},
  {id : 1 , name : "Sam"},
  {id : 2 , name : "Tom"},
  {id : 3 , name : "May"},
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data)
});

module.exports = router;
