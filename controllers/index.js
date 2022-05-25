const Todo = require('../models/todos');

// render todos index
function index(req,res) {
  let todo =Todo.getTodos();
  res.render('index', {todo})
}
// add todo
function create(req, res){
  Todo.addToDB(req.body.newtodo);
  res.redirect('/todo');
}
// delete todo
function deleteTodo(req, res){
  let incomingId = req.params.id;
  Todo.deleteOne(incomingId);
  res.redirect('/todo');
}
module.exports = {
  index,
  create,
  deleteTodo
}