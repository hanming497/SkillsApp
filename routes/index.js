var express = require('express');
var router = express.Router();
var toDoCtrl = require('../controllers/todo');

/* GET home page. */
router.get('/', function (req, res, next) {
  toDoCtrl.getAll(req, res);
});

router.post('/', function (req, res, next) {
  toDoCtrl.insertTodo(req, res);
});

router.delete('/:id', function (req, res, next) {
  console.log(req.body)

  toDoCtrl.deleteTodo(req, res);
});
module.exports = router;
