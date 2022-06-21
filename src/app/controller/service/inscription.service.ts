import {Injectable} from '@angular/core';
import {Inscription} from '../model/inscription.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cours} from '../model/cours.model';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService {

    constructor(private http: HttpClient) {
    }

    public save(inscription: Inscription): Observable<Inscription> {
        return this.http.post<Inscription>(environment.apprenantUrl + 'inscription/', inscription);
    }


    findAllByApprenantId(id: number): Observable<Inscription[]> {
        return this.http.get<Inscription[]>(environment.apprenantUrl + 'inscription/apprenant/id/' + id);
    }
}
