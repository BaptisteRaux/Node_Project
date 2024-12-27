import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface TodoDTO{
  id:number;
  title:string;
}

class TodoModel {
  constructor(x: TodoDTO) {

  }

}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = '/api/todos';

  getTodos(): Observable<TodoDTO[]> {
    return this.httpClient.get<TodoDTO[]>(this.apiUrl);
  }
  getTodoDTOs(): Observable<TodoModel[]> {
    return this.httpClient.get<TodoDTO[]>('/api/todos')
      .pipe(map(todoArray => this.toDTOs(todoArray)))
  }

    private toDTOs(todoArray: TodoDTO[]) {
    return [];
  }
}
