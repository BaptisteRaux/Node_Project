import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films$: Observable<{ title: string; description: string; rating: number; }[]> | undefined;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.films$ = this.filmService.getFilms();
  }
}
