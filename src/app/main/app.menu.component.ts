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
                    label: 'Favorites', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Manage categories', icon: 'pi pi-fw pi-cog', routerLink: ['/admin/manage/categories']}
                    ]
                },
                {
                    label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                    items: [
                        {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                        {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                        {label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/uikit/floatlabel']},
                        {label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                        {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                        {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                        {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                        {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                        {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                        {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                        {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                        {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
                        {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                        {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                        {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                        {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
                    ]
                },
            ];
        } else if (user.role === Role.FORMATEUR) {
            this.model = [
                {
                    label: 'Favorites', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Manage courses', icon: 'pi pi-fw pi-home', routerLink: ['/formateur/courses']}
                    ]
                },

            ];
        }

    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
