import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  alerts: any[] = []


  constructor( private router: Router, private alertService: AlertService){}

  ngOnInit(): void {
    this.loadAlerts()
  }

  loadAlerts(): void {
    this.alertService.getAllAlerts().subscribe(
      response => {
//        console.log(response)
        this.alerts = response.alerts
        console.log(this.alerts)
      },
      error => {
        console.log(error)
      }
    )
  }

  viewAlert(alertId: String): void {
    //a la ventana que quiero ir y con que valores
    this.router.navigate(['/alert', alertId])
  }
  
}
