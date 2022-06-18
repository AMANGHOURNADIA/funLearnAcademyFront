import { Injectable } from '@angular/core';
import {Cours} from '../model/cours.model';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Chapitre} from '../model/chapitre.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {
  private _chapitre: Chapitre = new Chapitre();
  private _chapitres: Array<Chapitre> = new Array<Chapitre>();
  private formateurUrl = environment.formateurUrl;
  private filename ;
  constructor(private http: HttpClient) { }

  get chapitre(): Chapitre {
    return this._chapitre;
  }

  set chapitre(value: Chapitre) {
    this._chapitre = value;
  }

  get chapitres(): Array<Chapitre> {
    return this._chapitres;
  }

  set chapitres(value: Array<Chapitre>) {
    this._chapitres = value;
  }
  public save(chapitre: Chapitre): Observable<Chapitre> {
    return this.http.post<Chapitre>(this.formateurUrl + 'chapitre/', chapitre);
  }

  public findAll(): Observable<Array<Chapitre>> {
    return this.http.get<Chapitre[]>(this.formateurUrl + 'chapitre/');

  }
  public findBySectionId(id: number): Observable<Array<Chapitre>> {
    return this.http.get<Chapitre[]>(this.formateurUrl + 'chapitre/section/id/' + id);

  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.formateurUrl + 'chapitre/id/' + id);
  }

  public update(chapitre: Chapitre): Observable<Chapitre> {
    return this.http.post<Chapitre>(this.formateurUrl + 'chapitre/', chapitre);
  }


  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(this.formateurUrl + 'chapitre/file', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  public getFile() {
    return this.http.get(this.formateurUrl + 'chapitre/file')
  }

}
