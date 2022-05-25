var express = require('express');
var router = express.Router();
const todoCtrl = require('../controllers/index');

/* render index */
router.get('/', todoCtrl.index);
// add todo
router.post('/posts', todoCtrl.create);
// delete todo
router.delete('/:id', todoCtrl.deleteTodo);




module.exports = router;
