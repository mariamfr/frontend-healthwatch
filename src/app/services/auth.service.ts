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
  private apiUrl = "http://localhost:4001/api"

  constructor(private http: HttpClient) { }

  //servicio para login
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
  }

    //servicio para login
    user(email: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/user?email=${ email }`)
    }
    //servicio para coleccion bancosangre
    bancoSangre(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/bancosangre`)
    }
  
}
