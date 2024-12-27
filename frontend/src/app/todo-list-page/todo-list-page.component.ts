import { Component, OnInit, inject } from '@angular/core';
import {TodoDTO, TodoService} from '../todo.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-todo-list-page',
  standalone: true,
  templateUrl: './todo-list-page.component.html',
  imports: [
    NgForOf
  ]
})
export class TodoListPageComponent implements OnInit {
  private readonly todoService = inject(TodoService);
  todos: TodoDTO[] = [];

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => (this.todos = data),
      error: (err) => console.error('Erreur de chargement', err),
    });
  }

  onReload() {
    this.loadTodos()
  }
}
