import {CategorieItem} from './categorie-item.true';
import {Categorie} from './categorie.model';

export class Sujet {
    public id = 0;
    public  name: string;
    public  description: string;
    public categorieItem: CategorieItem = new CategorieItem();
}
