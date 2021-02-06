import { Injectable } from '@angular/core';
import { Proveedor } from '../model/Proveedor';
import { Tipoproveedor } from '../model/Tipoproveedor';
import { Observable , ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  API_URL = environment.apiAuthUrl;
  URL_SERVICE_PROVEEDOR_REGISTER = '/proveedores/';
  URL_SERVICE_TIPO_PROVEEDOR_LIST = '/tipoproveedores/';


  constructor(private httpObj: HttpClient) { }

  public registrarProveedor(prov: Proveedor):Observable<any> {
    //return this.httpObj.post<any>("https://inventarioextranet.herokuapp.com/proveedores",prov);
    return this.httpObj.post<any>(`${this.API_URL}` + `${this.URL_SERVICE_PROVEEDOR_REGISTER}`, prov);
  }

  public ObtenerProveedores():Observable<Proveedor[]>{
    //return this.httpObj.get<Proveedor[]>("https://inventarioextranet.herokuapp.com/proveedores/");
    return this.httpObj.get<Proveedor[]>(`${this.API_URL}` + `${this.URL_SERVICE_PROVEEDOR_REGISTER}`);
  }

  public ObtenerTipoProveedor():Observable<Tipoproveedor[]>{
    //return this.httpObj.get<Tipoproveedor[]>("https://inventarioextranet.herokuapp.com/tipoproveedores/");
    return this.httpObj.get<Tipoproveedor[]>(`${this.API_URL}` + `${this.URL_SERVICE_TIPO_PROVEEDOR_LIST}`);
  }

}
