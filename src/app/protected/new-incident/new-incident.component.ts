import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-new-incident',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-incident.component.html',
  styleUrl: './new-incident.component.css'
})
export class NewIncidentComponent {

  description: string = ''
  nameIncident: string = ''
  incubationIncident: string = ''
  recoveryIncident: string = ''
  sourceIncident: string = ''
  imageIncident: string = ''
  casesIncident: number = 0
  urlSourceIncident: string = ''

  constructor(private router: Router,
    private incidentService: IncidentService
  ) { }


  newIncident(): void {
    console.log(this.nameIncident)
    console.log(this.description)

    //activar el servicio register
    this.incidentService.register( this.nameIncident, this.description, this.incubationIncident, this.recoveryIncident, this.sourceIncident, this.imageIncident, this.casesIncident, this.urlSourceIncident).subscribe(
      response => {
        console.log('ejecutado desde respuesta nueva incidencia')
        console.log(response)
        if (response.ok) {
          Swal.fire('Incidencia registrada!..', response.msg, 'success')
          //redirecciona a las incidencias
          this.router.navigate(['/incident'])
        } else {
          Swal.fire('error!, desde registro de incidencia.', response.error.msg, 'error')
        }
      },
      error => {
        console.log('Ejecutado desde el error registro incidencia')
        console.log(error)
        Swal.fire('!!upss error, registro incidencia', error.error.msg, 'error')
      }
    )


  }


}
