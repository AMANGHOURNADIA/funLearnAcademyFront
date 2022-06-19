import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../controller/service/authentication.service';
import {Role} from '../../enum/role.enum';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    constructor(private authService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit(): void {
        if (this.authService.getFormateurFromLocalCache()?.role !== Role.ADMIN){
            this.router.navigate(['/accessdenied']);
        }
    }

}
