import { Injectable } from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategorieItem} from '../model/categorie-item.model';
import {Sujet} from '../model/sujet.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieItemService {

  private _categoryItem: CategorieItem = new CategorieItem();
  private _categoryItems: Array<CategorieItem> = new Array<CategorieItem>();
  private adminUrl = environment.adminUrl;

  constructor(private http: HttpClient) {
  }


  get categoryItem(): CategorieItem {
    return this._categoryItem;
  }

  set categoryItem(value: CategorieItem) {
    this._categoryItem = value;
  }

  get categoryItems(): Array<CategorieItem> {
    return this._categoryItems;
  }

  set categoryItems(value: Array<CategorieItem>) {
    this._categoryItems = value;
  }

  public save(categorieItem: CategorieItem): Observable<CategorieItem> {
    return this.http.post<CategorieItem>(this.adminUrl + 'categoriesItem/', categorieItem);
  }

  public findAll(): Observable<Array<CategorieItem>> {
    return this.http.get<CategorieItem[]>(this.adminUrl + 'categoriesItem/');

  }

  public findByCategoryId(id: number): Observable<Array<CategorieItem>> {
    return this.http.get<CategorieItem[]>(this.adminUrl + 'categoriesItem/categorie/id/' + id);

  }
  public deleteCategoryItem(id: number): Observable<Array<CategorieItem>>{
    return this.http.delete<CategorieItem[]>(this.adminUrl + 'categoriesItem/id/' + id);

  }
}

