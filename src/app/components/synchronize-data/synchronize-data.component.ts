import { Component, OnInit } from '@angular/core';
import { DatosabiertosService } from '../../services/datosabiertos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-synchronize-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './synchronize-data.component.html',
  styleUrl: './synchronize-data.component.css'
})

export class SynchronizeDataComponent {
  data: any = {}
  url: string = 'https://datosabiertos.bogota.gov.co/dataset/c9cc72c9-4242-4a57-b86d-d377de88b558/resource/838967cb-47dd-4567-b41c-62d3103ecfaa/download/eps.geojson'
  constructor( private datosabiertosService: DatosabiertosService) {}
  ngOnInit(): void {
    this.getAllData()
    // this.firstTenFeatures = this.geojsonService.getFirstTenFeatures('bancoSangre'); // Pass the collection name here
  }


  getAllData(): void {
    this.datosabiertosService.getData(this.url).subscribe(
      response => {
        console.log(response)
        this.data = response
      },
      error => {
        console.log(error)
      }
    )

  }

  
}
