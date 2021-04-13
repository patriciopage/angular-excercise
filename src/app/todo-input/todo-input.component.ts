import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";
import { TodoItem } from "../todo-item/todo-item.model";

@Component({
  selector: "todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"]
})
export class TodoInputComponent implements OnInit {
  @Output()
  public itemInput: EventEmitter<TodoItem> = new EventEmitter();

  public description: string;
  public priority: number;

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    this.itemInput.emit(new TodoItem(this.description, this.priority));
    this.description = "";
  }
}
