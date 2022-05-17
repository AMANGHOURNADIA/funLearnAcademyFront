import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {CustomHttpRespone} from '../model/custom-http-response';
import {User} from '../model/user.model';

@Injectable({providedIn: 'root'})
export class UserService {
    private host = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.host}/user/list`);
    }

    public addUser(formData: FormData): Observable<User> {
        return this.http.post<User>(`${this.host}/user/add`, formData);
    }

    public updateUser(formData: FormData): Observable<User> {
        return this.http.post<User>(`${this.host}/user/update`, formData);
    }

    public resetPassword(email: string): Observable<CustomHttpRespone> {
        return this.http.get<CustomHttpRespone>(`${this.host}/user/resetpassword/${email}`);
    }

    public updateProfileImage(formData: FormData): Observable<HttpEvent<User>> {
        return this.http.post<User>(`${this.host}/user/updateProfileImage`, formData,
            {
                reportProgress: true,
                observe: 'events'
            });
    }

    public deleteUser(username: string): Observable<CustomHttpRespone> {
        return this.http.delete<CustomHttpRespone>(`${this.host}/user/delete/${username}`);
    }

    public addUsersToLocalCache(users: User[]): void {
        localStorage.setItem('users', JSON.stringify(users));
    }

    public getUsersFromLocalCache(): User[] {
        if (localStorage.getItem('users')) {
            // @ts-ignore
            return JSON.parse(localStorage.getItem('users'));
        }
        // @ts-ignore
        return null;
    }


}
