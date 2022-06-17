import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Formateur} from '../model/formateur.model';

@Injectable({
    providedIn: 'root'
})
export class FormateurService {
    host = environment.formateurUrl + 'formateur';
    hostAdmin = environment.adminUrl + 'formateur';
    private _createDialog: boolean;
    private _selectedFormateur: Formateur = new Formateur();
    private _formateurs: Array<Formateur> = new Array<Formateur>();


    get formateurs(): Array<Formateur> {
        return this._formateurs;
    }

    set formateurs(value: Array<Formateur>) {
        this._formateurs = value;
    }

    get selectedFormateur(): Formateur {
        return this._selectedFormateur;
    }

    set selectedFormateur(value: Formateur) {
        this._selectedFormateur = value;
    }

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    constructor(private http: HttpClient) {
    }

    public register(formateur: Formateur): Observable<Formateur> {
        return this.http.post<Formateur>(`${this.host}/`, formateur);
    }

    public findAll(): Observable<Formateur[]> {
        return this.http.get<Formateur[]>(this.host + '/');
    }

    update(selectedFormateur: Formateur): Observable<Formateur> {
        return this.http.post<Formateur>(this.hostAdmin + `/update`, selectedFormateur);
    }

    deleteFormateur(formateur: Formateur) {
        return this.http.delete(this.hostAdmin + '/id/' + formateur.id);
    }

    save(formateur: Formateur): Observable<Formateur> {
        return this.http.post<Formateur>(this.hostAdmin + `/`, formateur);
    }

    findById(id: number) {
        return this.http.get<Formateur>(this.hostAdmin + '/along/' + id);
    }
}
