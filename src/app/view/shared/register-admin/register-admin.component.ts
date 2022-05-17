import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/user.service';
import {User} from '../../../controller/model/user.model';
import {MessageService} from 'primeng/api';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {HeaderType} from '../../../enum/header-type.enum';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-admin',
    templateUrl: './register-admin.component.html',
    styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
    user: User = new User();
    private subscriptions: Subscription[] = [];

    constructor(private authService: AuthenticationService, private router: Router, private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    signUp() {
        this.authService.register(this.user).subscribe(
            data => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Registration added, welcome ' + this.user.fullname + ' in our community',
                    life: 3000
                });
                this.router.navigateByUrl('login');
            }, (error: HttpErrorResponse) => {
                console.log(error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'error',
                    detail: error?.error?.message,
                    life: 4000
                });
            }
        );
    }

}
