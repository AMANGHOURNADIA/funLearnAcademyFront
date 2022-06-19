import { Injectable } from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {environment} from '../../../environments/environment';
import {Apprenant} from '../model/apprenant.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  host = environment.apprenantUrl + 'admin';
    hostAdmin = environment.adminUrl + 'admin';

  private _admins: Array<Admin> = new Array<Admin>();

  constructor(private http: HttpClient ) { }

  public register(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.host}` + '/', admin);
  }


  get admins(): Array<Admin> {
    return this._admins;
  }

  set admins(value: Array<Admin>) {
    this._admins = value;
  }

  public findAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.host + '/');
  }

  update(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.hostAdmin + `/update`, admin);
  }

  deleteApprenant(admin: Admin) {
    return this.http.delete(this.hostAdmin + '/id/' + admin.id);
  }
}
