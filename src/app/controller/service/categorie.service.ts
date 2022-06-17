import {Injectable, OnInit} from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sujet} from '../model/sujet.model';

@Injectable({
    providedIn: 'root'
})
export class CategorieService {
    private _categorie: Categorie = new Categorie();
    private _categories: Array<Categorie> = new Array<Categorie>();
    private adminUrl = environment.adminUrl;

    constructor(private http: HttpClient) {
    }


    get categorie(): Categorie {
        return this._categorie;
    }

    set categorie(value: Categorie) {
        this._categorie = value;
    }

    get categories(): Array<Categorie> {
        return this._categories;
    }

    set categories(value: Array<Categorie>) {
        this._categories = value;
    }

    public save(categorie: Categorie): Observable<Categorie> {
        return this.http.post<Categorie>(this.adminUrl + 'categorie/', categorie);
    }

    public findAll(): Observable<Array<Categorie>> {
        return this.http.get<Categorie[]>(this.adminUrl + 'categorie/');

    }
    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.adminUrl + 'categorie/id/' + id);
    }

    public update(categorie: Categorie): Observable<Categorie> {
        return this.http.post<Categorie>(this.adminUrl + 'categorie/', categorie);
    }

}
