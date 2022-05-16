import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {User} from '../../../controller/model/user.model';
import {Role} from '../../../enum/role.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    user: User = new User();

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.user = this.authenticationService.getUserFromLocalCache();
        console.log(this.user);
        if (this.user.role === Role.ADMIN ){
            console.log('admin');
        } else if (this.user.role === Role.FROMATEUR){
            console.log('fourmateur');
        }
    }



}
