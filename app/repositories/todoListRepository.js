const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    var length = this.todoList.length;
    for (var i=0;i<length;i++){
        console.log("id:"+this.todoList[i].id
        + " name:"+this.todoList[i].name);
    }
  }

  findTodoBy(id) {
    //实现通过id查看具体todo的方法
    var i = this.findIndexById(id);
    if (i==-1){
        //not found
        console.log("id:"+id+" 不存在");
        return {};
    } else {
        console.log("id:"+id+ " name:"+this.todoList[i].name);
        console.log("description:"+ this.todoList[i].description);
        console.log("isFinished:"+this.todoList[i].isFinished
        +" createAt:"+this.todoList[i].createdAt);
        return this.todoList[i];
    }
  }

  createTodo(todoBody) {
    //实现创建新todo纪录的方法
    var new_todo = new Todo(++currentId,todoBody.name,todoBody.description);
    this.todoList.push(new_todo);
    console.log("create success");
}

  updateTodo(id, update) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    var i = this.findIndexById(id);
    if (i==-1){
        console.log("id:"+id+" 不存在");
        return {};
    } else {
        this.todoList[i].name = update.name;
        this.todoList[i].description = update.description;
        return this.todoList[i];

    }
  }

  deleteTodoBy(id) {
    //实现通过id来删除todo纪录的方法
    var i = this.findIndexById(id);
    if (i==-1){
        console.log("id:"+id+" 不存在");
    } else {
        this.todoList = this.todoList.splice(i,1);
    }

  }

  findIndexById(id){
      //实现通过id查看其在数组中的索引，不存在时返回-1
    var length = this.todoList.length;
    var i = 0;
    for (i=0;i<length;i++){
        if (this.todoList[i].id == id){
            break;
        }
    }
    var result = -1;
    i==length?result=-1:result=i;
    return result;
  }
}

module.exports = new TodoListRepository();