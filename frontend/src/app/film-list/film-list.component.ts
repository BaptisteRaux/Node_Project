import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: { title: string; description: string; rating: number }[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.films = this.filmService.getFilms();
  }
}
