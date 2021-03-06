import { Injectable } from '@angular/core';
import { Contrato } from '../model/Contrato';
import { Observable , ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  API_URL = environment.apiAuthUrl;
  URL_SERVICE_CONTRATO_REGISTER = '/contrato/';

  constructor(private httpObj: HttpClient) { }

public registrarContrato(contra: Contrato):Observable<any> {
  return this.httpObj.post<any>(`${this.API_URL}` +  `${this.URL_SERVICE_CONTRATO_REGISTER}`,contra);
}

}
