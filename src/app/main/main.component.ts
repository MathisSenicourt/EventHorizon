import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { eventsData } from '../event-data';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  events = eventsData;
  currentIndex = 0;
  showDetails = false;
  constructor(private router: Router) {}

  navigateToProfil(): void {
    this.router.navigate(['/profil']);
  }
  navigateToMessage(): void {
    // Navigate to the 'tabs' route when the button is clicked
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

  showNextEvent() {
    if (this.currentIndex < this.events.length - 1) {
      this.currentIndex++;
    }
  }

  showPreviousEvent() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
