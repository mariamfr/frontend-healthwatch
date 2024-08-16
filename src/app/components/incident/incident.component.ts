import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.css'
})
export class IncidentComponent {

  constructor( private router: Router){}

}
