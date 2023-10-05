import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
console.log('Datta')
@Component({
  selector: 'app-standalon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalon.component.html',
  styleUrls: ['./standalon.component.css']
})
export class StandalonComponent {

}
