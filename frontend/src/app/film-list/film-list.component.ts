import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films = [
    { title: 'Inception', rating: 4.5 },
    { title: 'Interstellar', rating: 4.8 },
    { title: 'The Dark Knight', rating: 4.7 },
  ];

  constructor() {}

  ngOnInit(): void {}

  rateFilm(film: any, newRating: number) {
    film.rating = newRating;
    alert(`Vous avez noté "${film.title}" avec ${newRating} étoiles !`);
  }
}
