import { AppRoutingModule } from './app-routing.module';
import { FilmListComponent } from './film-list/film-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    FilmListComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
