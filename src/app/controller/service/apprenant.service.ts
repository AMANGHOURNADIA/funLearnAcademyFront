import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Formateur} from '../model/formateur.model';
import {Observable} from 'rxjs';
import {Apprenant} from '../model/apprenant.model';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  host = environment.apprenantUrl + 'apprenant';

  constructor(private http: HttpClient ) { }

  public register(apprenant: Apprenant): Observable<Apprenant> {
    return this.http.post<Apprenant>(`${this.host}/`, apprenant);
  }
}
