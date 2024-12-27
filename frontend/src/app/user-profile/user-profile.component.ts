import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [
    FormsModule
  ]
})
export class UserProfileComponent {
  user = { name: 'John Doe', email: 'john.doe@example.com' };

  saveProfile() {
    console.log('Profil sauvegardé :', this.user);
  }
}
