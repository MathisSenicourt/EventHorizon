import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentEvent: any;
  showDetails = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const eventId = +params['id']; // Convertissez le paramètre en nombre

      // Recherchez l'événement correspondant dans votre tableau d'événements
      this.currentEvent = this.events.find(event => event.id === eventId);
    });
  }
  navigateToProfil(): void {
    this.router.navigate(['/profil']);
  }
  navigateToMessage(): void {
    this.router.navigate(['/message']);
  }
  navigateToMain(): void {
    this.router.navigate(['/main']);
  }

}
