import { Injectable } from '@angular/core';
import {Quiz} from '../model/quiz.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private _quiz: Quiz = new Quiz();
  private _quizes: Array<Quiz> = new Array<Quiz>();
  private _apprenantUrl = environment.apprenantUrl;
  constructor(private http: HttpClient) { }

  get quiz(): Quiz {
    return this._quiz;
  }

  set quiz(value: Quiz) {
    this._quiz = value;
  }

  get quizes(): Array<Quiz> {
    return this._quizes;
  }

  set quizes(value: Array<Quiz>) {
    this._quizes = value;
  }

  get apprenantUrl(): string {
    return this._apprenantUrl;
  }

  set apprenantUrl(value: string) {
    this._apprenantUrl = value;
  }
  public save(cours: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.apprenantUrl + 'quiz/', cours);
  }

  public findAll(): Observable<Array<Quiz>> {
    return this.http.get<Quiz[]>(this.apprenantUrl + 'quiz/');

  }

  public findById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(this.apprenantUrl + 'quiz/id/' + id)
  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.apprenantUrl + 'quiz/id/' + id);
  }

  public update(cours: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.apprenantUrl + 'quiz/', cours);
  }
}
