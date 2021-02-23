import { Injectable } from '@angular/core';
import { Habitacion } from '../model/Habitacion';
import { Tipohabitacion } from '../model/Tipohabitacion';
import { Observable , ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Proveedor } from '../model/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  API_URL = environment.apiAuthUrl;
  URL_SERVICE_HABITACION_REGISTER = '/habitacion/';
  URL_SERVICE_TIPO_HABITACION_LIST = '/tipohabitacion/';
  URL_SERVICE_HABITACION_PROVEEDOR = '/habitacion/provee/';
  URL_SERVICE_HABITACION_PROVE_TIPO = '/habitacion/proveetipo/';
  idProveedor:Number;

  constructor(private httpObj: HttpClient) { }

  public registerhabitacion(hab: Habitacion):Observable<any> {
    return this.httpObj.post<any>(`${this.API_URL}` +  `${this.URL_SERVICE_HABITACION_REGISTER}` + `${this.idProveedor}` ,hab);
  }

  public ObtenerTipo_habitaciones():Observable<Tipohabitacion[]>{
    return this.httpObj.get<Tipohabitacion[]>(`${this.API_URL}` + `${this.URL_SERVICE_TIPO_HABITACION_LIST}`);
  }

  public ObtenerHabitaciones():Observable<Habitacion[]>{
    return this.httpObj.get<Habitacion[]>(`${this.API_URL}` + `${this.URL_SERVICE_HABITACION_REGISTER}`);
  }

  public ObtenerHabitacionId(id:Number){
    return this.httpObj.get<Habitacion>(`${this.API_URL}` +  `${this.URL_SERVICE_HABITACION_REGISTER}` + id);
  }

  public ObtenerHabitacionesProveedorTipo():Observable<Habitacion[]>{
    return this.httpObj.get<Habitacion[]>(`${this.API_URL}` + `${this.URL_SERVICE_HABITACION_PROVE_TIPO}`);
  }

  public ObtenerProveedorporIdhabitacion(id:any):Observable<Proveedor[]>{
    return this.httpObj.get<Proveedor[]>(`${this.API_URL}` +  `${this.URL_SERVICE_HABITACION_PROVEEDOR}` + id);
  }

  public ActualizarHabitacion(habitacion: Habitacion):Observable<any>{
    return this.httpObj.put<Habitacion>(`${this.API_URL}` + `${this.URL_SERVICE_HABITACION_REGISTER}`,habitacion);
  }

  //public ActualizarHabitacion(habitacion: Habitacion):Observable<any>{
  //  return this.httpObj.put<Habitacion>("https://reqres.in/api/users/2",habitacion);
  //}


  
}
