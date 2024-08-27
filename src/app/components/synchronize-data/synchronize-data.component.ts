import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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
  resultSynchronizeData: string = '';
  url: string = 'https://datosabiertos.bogota.gov.co/dataset/53472aaa-2b4f-4b15-8e43-3a243b518ca1/resource/b80a3352-b9b8-42e8-a007-66f665515dc0/download/bancosangre.geojson'
  private dataDb: any = [];

  constructor(private datosabiertosService: DatosabiertosService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.getAllData()
    // this.firstTenFeatures = this.geojsonService.getFirstTenFeatures('bancoSangre'); // Pass the collection name here
  }


  getAllData(): void {
    this.resultSynchronizeData = ''
    this.datosabiertosService.getData(this.url).subscribe(
      response => {
        console.log(response)
        this.data = response
      },
      error => {
        console.log(error)
        this.resultSynchronizeData = error
      }
    )

  }


  synchronizeBancoSangre(): void {
      this.loadDataInDb()
      if (this.dataDb.length == 0) {
        this.getAllData()
        console.log('Mandando data', this.data)
        if (this.resultSynchronizeData == '') {            
        this.authService.newBancoSangre(this.data).subscribe(
          //subscribe recibe dos parametros, responsive, error
          response => {
            console.log(response)
            if (response.ok) {
              this.resultSynchronizeData = response.msg
              console.log(`synchronizeBancoSangre() newBancoSangre synchronize-data.component response ok`, response)
            } else {
              console.log(`synchronizeBancoSangre() newBancoSangre synchronize-data.component response error`, response.msg)
            }
          }, error => {
            console.error(`synchronizeBancoSangre() newBancoSangre synchronize-data.component error`, error)
          }
        )}
      }
      else {
        this.authService.updateBancoSangre(this.data).subscribe(
          //subscribe recibe dos parametros, responsive, error
          response => {
            console.log(response)
            if (response.ok) {
              console.log(`synchronizeBancoSangre() updateBancoSangre synchronize-data.component response ok`, response)
            } else {
              console.log(`synchronizeBancoSangre() updateBancoSangre synchronize-data.component response error`, response.msg)
            }
          }, error => {
            console.error(`synchronizeBancoSangre() updateBancoSangre synchronize-data.component error`, error)
          }
        )
      }
  }

  loadDataInDb(): void {
    this.dataDb = []
    this.authService.bancoSangre().subscribe(
      //subscribe recibe dos parametros, responsive, error
      response => {
        console.log(response)
        if (response.ok) {
          this.dataDb = response.data
          console.log(`loadBancoSangre() synchronize-data.component response ok`, this.dataDb)
        } else {
          console.log(`loadBancoSangre() synchronize-data.component response error`, response.msg)//Swal.fire('Upps errores', response.response.msg, 'error')
        }
      }, error => {
        console.error(`loadBancoSangre() synchronize-data.component error`, error)
      }
    )
  }


}
