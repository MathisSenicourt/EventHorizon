import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { eventsData } from '../../event-data';

@Component({
  selector: 'app-events-details',
  standalone: true,
  imports: [],
  templateUrl: './events-details.component.html',
  styleUrl: './events-details.component.css'
})
export class EventsDetailsComponent {
  events = eventsData;
  currentIndex = 0;
  showDetails = false;
  constructor(private router: Router) {}

  navigateToProfil(): void {
    this.router.navigate(['/profil']);
  }
  navigateToMessage(): void {
    this.router.navigate(['/message']);
  }

  navigateToEventDetails() {
    const currentEvent = this.getCurrentEvent();
    
    if (currentEvent) {
      const eventId = currentEvent.id;
        this.router.navigate(['/event-details', eventId]);
    }
  }

  getCurrentEvent() {
    return this.events[this.currentIndex];
  }
}
