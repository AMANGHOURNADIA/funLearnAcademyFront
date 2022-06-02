import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {AppComponent} from '../app.component';
import {AppMainComponent} from './app.main.component';
import {AuthenticationService} from '../controller/service/authentication.service';
import {Role} from '../enum/role.enum';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    animations: [
        trigger('inline', [
            state('hidden', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visible', style({
                height: '*',
            })),
            state('hiddenAnimated', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent, private authService: AuthenticationService, public appMain: AppMainComponent) {
    }

    ngOnInit() {
        const user = this.authService.getUserFromLocalCache();
        if (user.role === Role.ADMIN) {
            this.model = [
                {
                    label: 'Admin profile', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Manage categories', icon: 'pi pi-fw pi-cog', routerLink: ['/admin/manage/categories']}
                    ]
                },
                {
                    label: 'consultation', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                    items: [
                        {label: 'instructors', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/instructors']},
                        {label: 'Learners', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/Learners']},
                        {label: 'Formations', icon: 'pi pi-list', routerLink: ['/uikit/Formations']},
                        {label: 'Reclamation', icon: 'pi pi-comment', routerLink: ['/uikit/Reclamation']}
                    ]
                },
            ];
        } else if (user.role === Role.FORMATEUR) {
            this.model = [
                {
                    label: 'Formateur profile', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Manage courses', icon: 'pi pi-fw pi-home', routerLink: ['/formateur/courses']}
                    ]
                },
                {
                    label: 'consultation', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                    items: [
                        {label: 'instructors', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/instructors']},
                        {label: 'Learners', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/Learners']},
                        {label: 'Formations', icon: 'pi pi-list', routerLink: ['/uikit/Formations']},
                        {label: 'Reclamation', icon: 'pi pi-comment', routerLink: ['/uikit/Reclamation']}
                    ]
                },

            ];
        }

    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
