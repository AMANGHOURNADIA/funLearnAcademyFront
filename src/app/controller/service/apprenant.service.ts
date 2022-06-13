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
  hostAdmin = environment.adminUrl + 'apprenant';
  private _createDialog: boolean;
  private _selectedApprenant: Apprenant = new Apprenant();
  private _apprenants: Array<Apprenant> = new Array<Apprenant>();

  constructor(private http: HttpClient ) { }

  public register(apprenant: Apprenant): Observable<Apprenant> {
    return this.http.post<Apprenant>(`${this.host}` + '/', apprenant);
  }





  get apprenants(): Array<Apprenant> {
    return this._apprenants;
  }

  set apprenants(value: Array<Apprenant>) {
    this._apprenants = value;
  }

  get selectedApprenant(): Apprenant{
    return this._selectedApprenant;
  }

  set selectedApprenant(value: Apprenant) {
    this._selectedApprenant = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  public findAll(): Observable<Apprenant[]> {
    return this.http.get<Apprenant[]>(this.host + '/');
  }

  update(selectedApprenant: Apprenant): Observable<Apprenant> {
    return this.http.post<Apprenant>(this.hostAdmin + `/update`, selectedApprenant);
  }

  deleteApprenant(apprenant: Apprenant) {
    return this.http.delete(this.hostAdmin + '/id/' + apprenant.id);
  }
}
