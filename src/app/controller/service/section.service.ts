import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Section} from '../model/section.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private _section: Section = new Section();
  private _sections: Array<Section> = new Array<Section>();
  private formateurUrl = environment.formateurUrl;
  constructor(private http: HttpClient) { }

  get section(): Section {
    return this._section;
  }

  set section(value: Section) {
    this._section = value;
  }

  get sections(): Array<Section> {
    return this._sections;
  }

  set sections(value: Array<Section>) {
    this._sections = value;
  }
  public findByCoursId(id: number): Observable<Array<Section>> {
    return this.http.get<Section[]>(this.formateurUrl + 'section/cours/id/' + id);

  }
  public save(section: Section): Observable<Section> {
    return this.http.post<Section>(this.formateurUrl + 'section/', section);
  }
  public update(section: Section): Observable<Section> {
    return this.http.post<Section>(this.formateurUrl + 'section/', section);
  }

  public findAll(): Observable<Array<Section>> {
    return this.http.get<Section[]>(this.formateurUrl + 'section/');

  }

  public delete(id: number): Observable<Array<Section>>{
    return this.http.delete<Section[]>(this.formateurUrl + 'section/id/' + id);

  }

  findById(id: number) {
    return this.http.get<Section[]>(this.formateurUrl + 'section/id/' + id);
  }


}
