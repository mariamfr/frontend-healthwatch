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
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;    // const icon = new L.Icon({
    //   iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    //   iconSize: [25, 41],
    //   iconAnchor: [10, 41],
    //   popupAnchor: [2, -40]
    // });
      this.map = L.map('map').setView([4.7043, -74.0601], 12);
    // this.map = L.map('map', {
    //   center: [ 4.7043, -74.0601 ],
    //   zoom: 18
    // });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 12,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    let marker = L.marker([4.7043, -74.0601]);
    marker.addTo(this.map);
    marker = L.marker([4.6043, -73.0601]);
    marker.addTo(this.map);

// Create a bounds object that includes both markers
var bounds = L.latLngBounds([ [4.8, -75.1], [4.7043, -74.0601], [4.6043, -73.0601] ]);

// Adjust the map view to fit the bounds
this.map.fitBounds(bounds);
/* "Volar" hacia una coordenada
    console.log(this.ms.coords);
    this.ms.coordsChange.subscribe(coords => {
      console.log(coords);
      this.map.flyTo(coords, this.map.getZoom());
      L.marker(coords, { icon }).addTo(this.map);
    });

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LatLngExpression } from "leaflet";

@Injectable()
export class MarkerService {
  coords: any;
  coordsChange: Subject<LatLngExpression> = new Subject<LatLngExpression>();

  constructor() {
    this.coords = [];
  }

  change(coords: Array<number>) {
    this.coords = coords;
    this.coordsChange.next(this.coords);
  }
}


*/
  }

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}


