import { Injectable } from '@angular/core';
import { Negociacion } from '../model/Negociacion';
import { Observable , ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegociacionService {

  API_URL = environment.apiAuthUrl;
  URL_SERVICE_TIPO_NEG_LIST = '/tiponegociacion/';

  constructor(private httpObj: HttpClient) { }


  public ObtenerProveedores():Observable<Negociacion[]>{ 
    return this.httpObj.get<Negociacion[]>(`${this.API_URL}` + `${this.URL_SERVICE_TIPO_NEG_LIST}`);
  }

}
