import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from '../model/user.model';
import {Formateur} from '../model/formateur.model';
import {Apprenant} from '../model/apprenant.model';
import {Admin} from '../model/admin.model';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
    public host = environment.baseUrl;
    // @ts-ignore
    private token: string;
    // @ts-ignore
    private loggedInUsername: string;
    private jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient, private router: Router) {
    }

    public login(user: User): Observable<HttpResponse<User>> {
        console.log(user);
        return this.http.post<User>(`${this.host}user/login`, user, {observe: 'response'});
    }

    public register(user: User): Observable<User> {
        return this.http.post<User>(`${this.host}admin/user/`, user);
    }

    public logOut(): void {
        // @ts-ignore
        this.token = null;
        // @ts-ignore
        this.loggedInUsername = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('users');
        this.router.navigate(['/']);
    }

    public saveToken(token: string): void {
        this.token = token;
        localStorage.setItem('token', token);
    }

    public addUserToLocalCache(user: User): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public getUserFromLocalCache(): User {
        return JSON.parse(localStorage.getItem('user'));
    }
    public getFormateurFromLocalCache(): Formateur {
        return JSON.parse(localStorage.getItem('user'));
    }
    public getApprenantFromLocalCache(): Apprenant {
        return JSON.parse(localStorage.getItem('user'));
    }
    public getAdminFromLocalCache(): Admin {
        return JSON.parse(localStorage.getItem('user'));
    }

    public loadToken(): void {
        this.token = localStorage.getItem('token');
    }

    public getToken(): string {
        return this.token;
    }

    // @ts-ignore
    public isUserLoggedIn(): boolean {
        this.loadToken();
        console.log(this.token);
        if (this.token === null || this.token === '' || this.token === undefined) {
            this.logOut();
            return false;
        } else {
            if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
                if (!this.jwtHelper.isTokenExpired(this.token)) {
                    this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
                    return true;
                }
            }
        }
    }

    resetPass(user: User): Observable<User> {
        return this.http.post<User>(`${this.host}user/resetPass`, user);

    }
    forgetPass(email: string): Observable<any> {
        return this.http.get<any>(`${this.host}user/resetpassword/` + email);

    }
}
