let todo = [];

function getTodos(){
  return todo;
}

function addToDB(incomingStr){
  let todoObj = {
      todo: incomingStr,
      done: false,
      id: Math.floor(Math.random() * 1000),
  }
  todo.push(todoObj);
}

function deleteOne(id) {
	let firstIndex = null;
	for (let i = 0; i < todo.length; i++) {
		if (todo[i].id == id) {
			firstIndex = i;
		}
	}
	todo.splice(firstIndex, 1);
}
module.exports = {
  getTodos,
  addToDB,
  deleteOne
}