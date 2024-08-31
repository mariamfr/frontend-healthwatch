import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  userName : any = ''
  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.getUserName()
  }

toogleMenu() {
  this.isMenuOpen = !this.isMenuOpen
  console.log(this.isMenuOpen)
}

get isLoggedIn(): boolean {
  return this.authService.isLoggedIn()
}

logout() {
  this.authService.logout()
  this.router.navigate(['/login'])
}

getUserName() {
  this.userName =  this.authService.getUserName()
  console.log('buscando username')
  console.log(this.userName)
}

}
