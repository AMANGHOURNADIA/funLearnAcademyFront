import {Formateur} from './formateur.model';
import {Sujet} from './sujet.model';

export class Cours {
    public  id: number;
    public  name: string;
    public  description: string;
    public courseImage: string;
    public listImg: string;
    public title: string;
    public rating: string;
    public oldPrice: string;
    public  price: number;
    public  formateur: Formateur;
    public  sujet: Sujet;
}
