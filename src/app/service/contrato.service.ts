import { Injectable } from '@angular/core';
import { Contrato } from '../model/Contrato';
import { Observable , ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private httpObj: HttpClient) { }

public registrarContrato(contra: Contrato):Observable<any> {
  return this.httpObj.post<any>("https://inventarioextranet.herokuapp.com/contrato",contra);
}

}
