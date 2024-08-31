import { Injectable } from '@angular/core';
// conectar back con el front
import { HttpClient, HttpHeaders } from '@angular/common/http';
//permite ayudar a la conexion httpclient
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //ruta del backend para ejecutar los api rest
  private apiUrl = "http://localhost:3001/api"

  constructor(private http: HttpClient) { }

  //creando funcion para buscar la informacion del encabezado http
  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
  }

  //servicio para login
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
  }

  //servicio para login
  user(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user?email=${email}`)
  }


  //Revisa si el usuario se encuentra logeado
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token')
  }

  //Realizar logout
  logout() {
    sessionStorage.removeItem('token')
  }

  //organizando servicio para el api registro usuario que tieen un post y un json
  register(email: string, password: string, username: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password, username })
  }

  //Trae el token
  getToken(): string | null {
    return sessionStorage.getItem('token')
  }

  //Trae el id del usuario
  getUserId(): string | null {
    return sessionStorage.getItem('userId')
  }

  //Trae el nombre del usuario
  getUserName(): string | null {
    return sessionStorage.getItem('userName')
  }

  //traer los datos para un usuario
  getUser(userId: any): Observable<any> {
    const headers = this.getHeaders()
    return this.http.get<any>(`${this.apiUrl}/user/${userId}`, { headers })
  }

  //servicio para coleccion bancosangre
  bancoSangre(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bancosangre`)
  }


  //servicio para coleccion nameService
  dataService(nameService: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${nameService}`)
  }
  synchronizationData(service: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/synchronization?service=${service}`, '')
  }
// getMarkers(geojsonData:string): Observable<any> {
//   return this.http.get<any>(`${geojsonData}`)
//   }
  }
