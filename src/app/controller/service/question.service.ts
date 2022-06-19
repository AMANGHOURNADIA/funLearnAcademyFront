import { Injectable } from '@angular/core';
import {Question} from '../model/question.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private _question: Question = new Question();
  private _questions: Array<Question> = new Array<Question>();
  private _formateurUrl = environment.formateurUrl;
  private _apprenantUrl = environment.apprenantUrl;
    private _showCreateQuizDialog: boolean;
  constructor(private http: HttpClient) { }

  get showCreateQuizDialog(): boolean {
    return this._showCreateQuizDialog;
  }

  set showCreateQuizDialog(value: boolean) {
    this._showCreateQuizDialog = value;
  }


  get question(): Question {
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }

  get questions(): Array<Question> {
    return this._questions;
  }

  set questions(value: Array<Question>) {
    this._questions = value;
  }

  get formateurUrl(): string {
    return this._formateurUrl;
  }

  set formateurUrl(value: string) {
    this._formateurUrl = value;
  }

  get apprenantUrl(): string {
    return this._apprenantUrl;
  }

  set apprenantUrl(value: string) {
    this._apprenantUrl = value;
  }
  public save(qestion1: Question): Observable<Question> {
    return this.http.post<Question>(this.formateurUrl + 'question/', qestion1);
  }

  public findAll(): Observable<Array<Question>> {
    return this.http.get<Question[]>(this.apprenantUrl + 'categorie/');

  }

  public findById(id : number) : Observable<Question> {
    return this.http.get<Question>(this.formateurUrl + 'question/id/' + id)
  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.formateurUrl + 'question/id/' + id);
  }

  public update(cours: Question): Observable<Question> {
    return this.http.post<Question>(this.formateurUrl + 'question/', cours);
  }
}
