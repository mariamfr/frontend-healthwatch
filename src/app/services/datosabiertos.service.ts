import { Injectable } from '@angular/core';
// conectar back con el front
import { HttpClient } from '@angular/common/http';
//permite ayudar a la conexion httpclient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosabiertosService {



  constructor(private http: HttpClient) { }
  //servicio para data
  getData(url: string): Observable<any> {
    return this.http.get<any>(url)
  }
}





