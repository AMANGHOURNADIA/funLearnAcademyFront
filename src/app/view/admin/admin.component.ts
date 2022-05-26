import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../menu/app.menu.service';
import {PrimeNGConfig} from 'primeng/api';
import {AppComponent} from '../../app.component';
import {Categorie} from '../../controller/model/categorie.model';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

}
