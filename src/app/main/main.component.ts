import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { eventsData } from '../event-data';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  eventsBack: any = { events: [] };
  events = eventsData;
  currentIndex = 0;
  showDetails = false;
  constructor(
    private router: Router,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.globalService.getAllEvents()
      .subscribe((data:any[]) => {
        this.eventsBack = data;
      });
  }

  toto(){
    console.log(this.eventsBack)
  }

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
