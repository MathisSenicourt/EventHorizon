import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import {FormsModule} from "@angular/forms"; // Assurez-vous d'importer correctement le service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    Mail: '',
    Password: ''
  };

  constructor(private router: Router, private globalService: GlobalService) {}

  login(): void {
    this.globalService.checkUserWithPassword(this.loginData).subscribe(
      (response) => {
        if (response.success) {
          console.log('Connexion réussie:', response.user[0].ID);
          sessionStorage.setItem('userId', response.user[0].ID.toString());
          this.router.navigate(['/main']);
        } else {
          console.error('Nom d\'utilisateur ou mot de passe incorrect:', response.message);
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion:', error);
      }
    );
  }
}
