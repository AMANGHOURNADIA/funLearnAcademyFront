import {Quiz} from './quiz.model';
import {Formateur} from './formateur.model';
import {Cours} from './cours.model';

export class Question {

    public id: number = 0;
    public question: string;
    public response1: string;
    public response2: string;
    public response3: string;
    public correct: string;
    public quiz: Quiz;
    public formateur: Formateur;
    public cours: Cours;
}
