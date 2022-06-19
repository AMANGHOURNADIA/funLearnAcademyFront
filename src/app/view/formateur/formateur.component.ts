import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../controller/service/authentication.service';
import {Router} from '@angular/router';
import {Role} from '../../enum/role.enum';

@Component({
    selector: 'app-formateur',
    templateUrl: './formateur.component.html',
    styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {
    constructor(private authService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit(): void {
        if (this.authService.getFormateurFromLocalCache()?.role !== Role.FORMATEUR){
            this.router.navigate(['/accessdenied']);
        }
    }
}
