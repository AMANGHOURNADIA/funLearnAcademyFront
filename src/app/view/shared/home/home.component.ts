import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {User} from '../../../controller/model/user.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    user: User;

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    ngOnInit(): void {
        this.user = this.authenticationService.getUserFromLocalCache();


    }


}
