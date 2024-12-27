import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FilmService {
  getFilms() {
    return [
      { title: 'Inception', description: 'Un film de science-fiction.', rating: 5 },
      { title: 'Avatar', description: 'Une aventure sur Pandora.', rating: 4 },
      { title: 'Interstellar', description: 'Exploration spatiale et émotions.', rating: 5 },
    ];
  }
}
