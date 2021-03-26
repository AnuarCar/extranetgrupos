import { Injectable } from '@angular/core';
import { Allotment } from  '../model/Allotment';
import { Observable } from  'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllotmentService {


  API_URL = environment.apiAuthUrl;
  URL_SERVICE_ALLOTMENT_REGISTER = '/allotment/';

  constructor(private httpObj: HttpClient) { }

  public registrarAllotment(allot: Allotment):Observable<any> {
    return this.httpObj.post<any>(`${this.API_URL}` + `${this.URL_SERVICE_ALLOTMENT_REGISTER}`, allot);
  }
}
