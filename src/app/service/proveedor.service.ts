import { Injectable } from '@angular/core';
import { Proveedor } from '../model/Proveedor';
import { Observable , ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProveedorService {



  constructor(private httpObj: HttpClient) { }

  public registrarProveedor(prov: Proveedor):Observable<any> {
    return this.httpObj.post<any>("https://inventarioextranet.herokuapp.com/proveedores", prov);

  }



}
