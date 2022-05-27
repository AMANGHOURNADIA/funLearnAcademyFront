import {Categorie} from './categorie.model';

export class CategorieItem {
    public id = 0;
    public name: string;
    public description: string;
    public categorie: Categorie = new Categorie();
}
