import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';;
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todo: TodoItem;

  @Output()
  public deleteItem: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteItem.emit(this.todo);
  }

}
