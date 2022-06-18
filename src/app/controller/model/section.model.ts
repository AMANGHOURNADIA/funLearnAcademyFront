import {Cours} from './cours.model';
import {Formateur} from './formateur.model';

export class Section {
    public id: number;
    public section_name: string;
    public cours: Cours;
    public formateur: Formateur;
}

