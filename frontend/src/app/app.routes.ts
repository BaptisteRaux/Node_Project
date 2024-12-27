import { Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmListComponent },
  { path: 'profile', component: UserProfileComponent },
];
