import { Injectable } from '@angular/core';
import { TodoItem } from "../classes/todo-item";

@Injectable()
export class TodoService {

  private todos: TodoItem[];
  private next: number;

  constructor() { 
    this.todos = [];
    this.todos.push(new TodoItem(0, "Gjøre oppvask", "Her må du vaske masse ting"));
    this.todos.push(new TodoItem(1, "Gjøre lekser", "Her må du gjøre masse lekser"));
    this.todos.push(new TodoItem(2, "Lese til eksamen", "Det suger"));
    this.next = 3;
  }

  public addTodo(name: string, description: string): void {
    this.todos.push(new TodoItem(this.next, name, description));
    this.next++;
  }

  public removeTodo(todo: TodoItem) {
    this.todos = this.todos.filter(elem => elem.getId() !== todo.getId());
    this.next--;
  }

  public getTodos(): TodoItem[] {
    return this.todos;
  }
}
