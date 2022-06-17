import {Section} from './section.model';
import {Formateur} from './formateur.model';

export class Chapitre {
    public id: number;
    public code: string;
    public libelle: string;
    public urlImage: string;
    public urlVideo: string;
    public contenu: string;
    public numeroOrder: number;
    public section: Section;
    public formateur: Formateur;
}
