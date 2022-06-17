import { Injectable } from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {environment} from '../../../environments/environment';
import {Sujet} from '../model/sujet.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private _sujet: Sujet = new Sujet();
  private _sujets: Array<Sujet> = new Array<Sujet>();
  private adminUrl = environment.adminUrl;
  constructor(private http: HttpClient) { }

  get sujet(): Sujet {
    return this._sujet;
  }

  set sujet(value: Sujet) {
    this._sujet = value;
  }

  get sujets(): Array<Sujet> {
    return this._sujets;
  }

  set sujets(value: Array<Sujet>) {
    this._sujets = value;
  }
  public save(sujet: Sujet): Observable<Sujet> {
    return this.http.post<Sujet>(this.adminUrl + 'sujet/', sujet);
  }

  public findAll(): Observable<Array<Sujet>> {
    return this.http.get<Sujet[]>(this.adminUrl + 'sujet/');

  }
  public findByCategoryItemId(id: number): Observable<Array<Sujet>> {
    return this.http.get<Sujet[]>(this.adminUrl + 'sujet/categorieItem/id/' + id);

  }
  public deleteById(id: number): Observable<any>{
    return this.http.delete<any>(this.adminUrl + 'sujet/id/' + id);

  }

  findById(sujetId: number): Observable<Sujet> {
    return this.http.get<Sujet>(this.adminUrl + 'sujet/categorieItem/id/' + sujetId);

  }
}
