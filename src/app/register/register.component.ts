import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { GlobalService } from "../../services/global.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser = {
    Name: '',
    Surname: '',
    Mail: '',
    Password: ''
  };

  constructor(
    private router: Router,
    private globalService: GlobalService
  ) {}

  registerUser() {
    this.globalService.createUser(this.newUser).subscribe(
      (response) => {
        if (response.success) {
          console.log('Utilisateur créé avec succès:', response);
          this.router.navigate(['/main']);
        } else {
          console.error('Erreur lors de la création de l\'utilisateur:', response.message);
        }
      },
      (error) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
      }
    );
  }
}
