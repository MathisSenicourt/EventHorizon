import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-all-tab',
  standalone: true,
  imports: [RouterOutlet,MainComponent],
  templateUrl: './all-tab.component.html',
  styleUrl: './all-tab.component.css'
})
export class AllTabComponent {

}
