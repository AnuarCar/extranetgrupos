import { Injectable } from '@angular/core';
import { Habitacion } from '../model/Habitacion';
import { Tipohabitacion } from '../model/Tipohabitacion';
import { Observable , ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  API_URL = environment.apiAuthUrl;
  URL_SERVICE_HABITACION_REGISTER = '/habitacion/';
  URL_SERVICE_TIPO_HABITACION_LIST = '/tipohabitacion/';
  idProveedor:Number;

  constructor(private httpObj: HttpClient) { }

  public registerhabitacion(hab: Habitacion):Observable<any> {
    return this.httpObj.post<any>(`${this.API_URL}` +  `${this.URL_SERVICE_HABITACION_REGISTER}` + `${this.idProveedor}` ,hab);
  }

  public Obtenerhabitaciones():Observable<Tipohabitacion[]>{
    return this.httpObj.get<Tipohabitacion[]>(`${this.API_URL}` + `${this.URL_SERVICE_TIPO_HABITACION_LIST}`);
  }
  
}
