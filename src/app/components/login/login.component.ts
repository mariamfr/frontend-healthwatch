import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = ''
  email: string = ''
  password: string = ''

constructor(private router: Router, private authService: AuthService){}

login() :void {
  console.log(this.email)
  console.log(this.password)
  this.authService.login(this.email, this.password).subscribe(
    //subscribe recibe dos parametros, responsive, error
    response => {
        console.log('entrando ok')
        if(response.ok){
            //guardar session
            sessionStorage.setItem('token', response.token)
            Swal.fire('Bienvenido User logeado', response.msg, 'success')
            this.router.navigate(['/home'])
        } else {
            Swal.fire('Errores de ingreso', response.error.msg, 'success')
        }
    }, error => {
      Swal.fire('Upps errores', error.error.msg, 'error')
    }
  )
  
}

}
