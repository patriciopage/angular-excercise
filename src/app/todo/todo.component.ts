import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../todo-item/todo-item.model";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  public todos: Array<TodoItem>;
  public tempTodo: Array<TodoItem>;
  public priorityFilter: number;

  constructor() {}

  ngOnInit(): void {
    this.todos = new Array();
    this.tempTodo = new Array();
  }

  addTodo(todo: TodoItem) {
    this.todos.push(todo);
  }

  deleteItemFromList(TodoItem) {
    this.todos.splice(this.todos.indexOf(TodoItem), 1);
  }

  // all todos removed from index downward
  /*
  deleteItemFromList(TodoItem) {
    this.todos.splice(this.todos.indexOf(TodoItem));
  }
  */

  sortByPriority() {}

  filterByPriority() {
    this.tempTodo = this.todos.slice();
    this.todos = this.todos.filter(
      todo => todo.priority === this.priorityFilter
    );
  }

  clearFilter() {
    this.todos = this.tempTodo.slice();
    this.tempTodo = new Array();
  }
}
