import { Injectable } from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {environment} from '../../../environments/environment';
import {Cours} from '../model/cours.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private _cours: Cours = new Cours();
  private _courses: Array<Cours> = new Array<Cours>();
  private formateurUrl = environment.formateurUrl;
  constructor(private http: HttpClient) { }

  get cours(): Cours {
    return this._cours;
  }

  set cours(value: Cours) {
    this._cours = value;
  }

  get courses(): Array<Cours> {
    return this._courses;
  }

  set courses(value: Array<Cours>) {
    this._courses = value;
  }
  public save(cours: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.formateurUrl + 'cours/', cours);
  }

  public findAll(): Observable<Array<Cours>> {
    return this.http.get<Cours[]>(this.formateurUrl + 'cours/');

  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.formateurUrl + 'cours/id/' + id);
  }

  public update(cours: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.formateurUrl + 'cours/', cours);
  }


}
