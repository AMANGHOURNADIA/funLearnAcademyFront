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
  private _showCreateSectionDialog: boolean;
  private _showCreateChapDialog: boolean;
  private _showCreateCourseDialog: boolean;


  constructor(private http: HttpClient) { }


  get showCreateSectionDialog(): boolean {
    return this._showCreateSectionDialog;
  }

  set showCreateSectionDialog(value: boolean) {
    this._showCreateSectionDialog = value;
  }

  get showCreateChapDialog(): boolean {
    return this._showCreateChapDialog;
  }

  set showCreateChapDialog(value: boolean) {
    this._showCreateChapDialog = value;
  }

  get showCreateCourseDialog(): boolean {
    return this._showCreateCourseDialog;
  }

  set showCreateCourseDialog(value: boolean) {
    this._showCreateCourseDialog = value;
  }

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


  findAllByFormateurId(id: number): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.formateurUrl + 'cours/fourmateur/id/' + id);
  }
}
