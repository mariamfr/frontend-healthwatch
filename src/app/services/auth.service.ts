import { Injectable } from '@angular/core';
// conectar back con el front
import { HttpClient } from '@angular/common/http';
//permite ayudar a la conexion httpclient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //ruta del backend para ejecutar los api rest
  private apiUrl = "http://localhost:3001/api"

  constructor(private http: HttpClient) { }

  //servicio para login
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
  }

}
