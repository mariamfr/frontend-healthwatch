import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements AfterViewInit {
  private map: L.Map | undefined;

  private initMap(): void {
    this.map = L.map('map').setView([4.7043, -74.0601], 12);
    // this.map = L.map('map', {
    //   center: [ 4.7043, -74.0601 ],
    //   zoom: 18
    // });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 12,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}


