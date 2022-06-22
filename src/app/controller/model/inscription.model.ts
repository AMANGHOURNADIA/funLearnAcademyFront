import {Apprenant} from './apprenant.model';
import {Cours} from './cours.model';

export class Inscription {
    public id: number ;
    public number: number;
    public apprenant: Apprenant = new Apprenant();
    public cours: Cours = new Cours();
    public  cardName: string;
    public  cardNumber: string;
    public  securityCode: string;
    public  dateExpiration: string;
    public  dateInscription: string;
}
