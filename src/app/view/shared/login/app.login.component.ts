import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {AppMenuComponent} from '../../../main/app.menu.component';
import {User} from '../../../controller/model/user.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {HeaderType} from '../../../enum/header-type.enum';
import {MessageService} from 'primeng/api';
import {Role} from '../../../enum/role.enum';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit, OnDestroy {
    user: User = new User();
    public showLoading: boolean | undefined;
    private subscriptions: Subscription[] = [];

    constructor(private router: Router, private messageService: MessageService, private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.user = this.authenticationService.getUserFromLocalCache();
        if (this.authenticationService.isUserLoggedIn()) {
            if (this.user.role === Role.FORMATEUR) {
                this.router.navigateByUrl('/formateur/courses');
            } else if (this.user.role === Role.ADMIN) {
                this.router.navigateByUrl('/admin/manage/categories');
            } else {
                this.router.navigateByUrl('');
            }

        } else {
            this.router.navigateByUrl('/login');
        }
    }

    public onLogin(user: User): void {
        this.showLoading = true;
        this.subscriptions.push(
            this.authenticationService.login(user).subscribe(
                (response: HttpResponse<User>) => {
                    const token = response.body.token;
                    this.authenticationService.saveToken(token);
                    this.authenticationService.addUserToLocalCache(response.body);
                    this.router.navigateByUrl('');
                    this.showLoading = false;
                },
                (errorResponse: HttpErrorResponse) => {
                    this.showLoading = false;
                    this.messageService.add({
                        severity: 'error',
                        summary: 'error',
                        detail: errorResponse?.error?.message,
                        life: 4000
                    });
                }
            )
        );
    }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
