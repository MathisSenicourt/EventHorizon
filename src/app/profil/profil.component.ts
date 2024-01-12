import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { eventsData, eventsDataUser } from '../event-data';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  users = eventsDataUser;
  events = eventsData;

  constructor(private router: Router) {}

  navigateToMain(): void {
    // Navigate to the 'tabs' route when the button is clicked
    this.router.navigate(['/main']);
  }
  navigateToMessage(): void {
    // Navigate to the 'tabs' route when the button is clicked
    this.router.navigate(['/message']);
  }
}
