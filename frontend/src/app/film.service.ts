import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmService {
  private apiUrl = 'http://localhost:3000/api/films';
  constructor(private http: HttpClient) {}
  getFilms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
