import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    layoutMode = 'static';

    lightMenu = false;

    topbarColor = 'layout-topbar-dark';

    inlineUser = false;

    isRTL = false;

    inputStyle = 'outlined';

    ripple = true;

    items: MenuItem[];

    constructor(private primengConfig: PrimeNGConfig, private router: Router) {
    }

    title = 'educal';


    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.primengConfig.ripple = true;
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            },
            {
                label: 'Angular',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                routerLink: '/fileupload'
            }
        ];
    }


}
