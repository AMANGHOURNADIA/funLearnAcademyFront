import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Formateur} from '../model/formateur.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  host = environment.formateurUrl + 'formateur';

  constructor(private http: HttpClient ) { }

  public register(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(`${this.host}/`, formateur);
  }
}
