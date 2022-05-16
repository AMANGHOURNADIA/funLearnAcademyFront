import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from '../controller/service/authentication.service';
import {AppMenuComponent} from '../app.menu.component';
import {User} from '../controller/model/user.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {HeaderType} from '../enum/header-type.enum';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit, OnDestroy {
    user: User = new User();
    public showLoading: boolean | undefined;
    private subscriptions: Subscription[] = [];

    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        if (this.authenticationService.isUserLoggedIn()) {
            this.router.navigateByUrl('');
        } else {
            this.router.navigateByUrl('/login');
        }
    }

    public onLogin(user: User): void {
        this.showLoading = true;
        this.subscriptions.push(
            this.authenticationService.login(user).subscribe(
                (response: HttpResponse<User>) => {
                    console.log(response);
                    const token = response.headers.get(HeaderType.JWT_TOKEN);
                    console.log(token);
                    // @ts-ignore
                    this.authenticationService.saveToken(token);
                    // @ts-ignore
                    this.authenticationService.addUserToLocalCache(response.body);
                    this.router.navigateByUrl('');
                    this.showLoading = false;
                },
                (errorResponse: HttpErrorResponse) => {
                    this.showLoading = false;
                    console.log(errorResponse);
                }
            )
        );
    }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
