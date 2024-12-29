import { AppRoutingModule } from './app-routing.module';
import { FilmListComponent } from './film-list/film-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FilmListComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
