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
  url: string = 'https://datosabiertos.bogota.gov.co/dataset/53472aaa-2b4f-4b15-8e43-3a243b518ca1/resource/b80a3352-b9b8-42e8-a007-66f665515dc0/download/bancosangre.geojson'
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
        console.log(this.data)
      },
      error => {
        console.log(error)
      }
    )

  }

  
}
