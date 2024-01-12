import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { eventsData, eventsDataUser } from '../event-data';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  userBack: any = { events: [] };
  eventsUserBack: any = { events: [] };
  id_user = 2;
  users = eventsDataUser;
  events = eventsData;

  constructor(private router: Router,
    private globalService: GlobalService
    ) {}

  ngOnInit() {
    this.globalService.getUserById(this.id_user)
      .subscribe((data:any[]) => {
        this.userBack = data;
      });

    this.globalService.getEventsByUserId(this.id_user)
    .subscribe((data:any[]) => {
      this.eventsUserBack = data;
    });
  }
  navigateToMain(): void {
    // Navigate to the 'tabs' route when the button is clicked
    this.router.navigate(['/main']);
  }
  navigateToMessage(): void {
    // Navigate to the 'tabs' route when the button is clicked
    this.router.navigate(['/message']);
  }
}
