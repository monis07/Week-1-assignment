/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(list){
    this.arr=list;
  }
  add(todo){
    this.arr.push(todo);
    console.log(this.arr);
  }
  remove(indexOfTodo){
    this.arr.splice(indexOfTodo,1);
    console.log(this.arr);
  }
  update(index,updatedTodo){
    this.arr.splice(index,0,updatedTodo)
    console.log(this.arr);
  }
  getAll(){
  console.log(this.arr);
  }
  get(indexOfTodo){
    console.log(this.arr[indexOfTodo]);
  }
clear(){
  this.arr=[];
  console.log(this.arr);
}
}

var todo1=[];


let obj1=new Todo(todo1);

obj1.add("Breakfast");
obj1.add("Lunch");
obj1.add("Dinner");
obj1.update(2,"Snacks");
obj1.remove(0);
obj1.update(0,'Breakfast');
obj1.get(3);
obj1.clear();




module.exports = Todo;
