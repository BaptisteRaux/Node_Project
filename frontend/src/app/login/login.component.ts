import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class LoginComponent {
  user = { name: '', email: '', password: '' }; // Ajout du mot de passe
  successMessage = '';
  errorMessage = '';

  login() {
    // Simuler une connexion avec un utilisateur fictif
    const dummyUser = { name: 'JohnDoe', email: 'john.doe@example.com', password: '123456' };

    if (this.user.name === dummyUser.name && this.user.email === dummyUser.email && this.user.password === dummyUser.password) {
      this.successMessage = 'You have successfully logged in!';
      this.errorMessage = ''; // Clear error message
    } else {
      this.errorMessage = 'Invalid login credentials. Please try again.';
      this.successMessage = ''; // Clear success message
    }
  }
}
