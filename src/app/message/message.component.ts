import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { eventsDataUser } from '../event-data';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  users = eventsDataUser;

  constructor(private router: Router) {}

  navigateToMain(): void {
    this.router.navigate(['/main']);
  }
  navigateToProfil(): void {
    this.router.navigate(['/profil']);
  }
}
