import {Formateur} from './formateur.model';
import {Sujet} from './sujet.true';

export class Cours {
    private  id: number;
    private  name: string;
    private  description: string;
    private  price: number;
    private  formateur: Formateur;
    private  sujet: Sujet;
}
