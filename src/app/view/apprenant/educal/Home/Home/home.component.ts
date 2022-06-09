import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../../controller/service/authentication.service';
import {Router} from '@angular/router';
import {Role} from '../../../../../enum/role.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private authService: AuthenticationService,
                private router: Router
    ) {
    }

    ngOnInit(): void {
        const user = this.authService.getUserFromLocalCache();
        if (user != null) {
            if (user.role === Role.FORMATEUR) {
                this.router.navigate(['formateur/courses']);
            } else if (user.role === Role.ADMIN) {
                this.router.navigate(['admin/manage/categories']);

            }
        }
    }

}
