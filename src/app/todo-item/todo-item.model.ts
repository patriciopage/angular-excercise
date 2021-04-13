export interface TodoItem {
  description: string;
  priority: number;
}

export class TodoItem implements TodoItem {
  constructor(description: string, priority?: number) {
    this.description = description;
    this.priority = priority;
  }
}
