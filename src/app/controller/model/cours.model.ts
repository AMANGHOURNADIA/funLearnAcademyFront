import {Formateur} from './formateur.model';
import {Sujet} from './sujet.true';

export class Cours {
    id: number;
    name: string;
    description: string;
    formateur: Formateur;
    sujet: Sujet;
    courseImage: string;
    listImg: string;
    lessonNumber: string;
    rating: string;
    price: string;
    oldPrice: string;
}
