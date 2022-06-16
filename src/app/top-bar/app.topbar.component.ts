import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {AppMainComponent} from '../main/app.main.component';
import {User} from '../controller/model/user.model';
import {AuthenticationService} from '../controller/service/authentication.service';
import {Role} from '../enum/role.enum';
import {MenuItem} from 'primeng/api';
import {Categorie} from '../controller/model/categorie.model';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {
    user: User = new User();
    public role = Role;
    isUserLoggedIn: boolean;
    items: MenuItem[];
    categories: Categorie[];

    constructor(public app: AppComponent, private authService: AuthenticationService, public appMain: AppMainComponent) {
    }

    ngOnInit(): void {
        this.user = this.authService.getUserFromLocalCache();
        this.isUserLoggedIn = this.authService.isUserLoggedIn();
        this.items = [
            {label: 'As admin', icon: 'pi pi-cog', routerLink: ['/register/admin']},
            {label: 'As fourmateur', icon: 'pi pi-cog', routerLink: ['/register/formateur']},
            {label: 'As apprenant', icon: 'pi pi-cog', routerLink: ['/register/apprenant']},
        ];
        this.categories = [

        ];
    }

    logOut() {
        this.authService.logOut();
        this.user = new User();
    }
    Login(){
        this.authService.login(this.user);
    }
}
