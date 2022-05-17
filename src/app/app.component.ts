import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    layoutMode = 'static';

    lightMenu = false;

    topbarColor = 'layout-topbar-dark';

    inlineUser = false;

    isRTL = false;

    inputStyle = 'outlined';

    ripple = true;

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }


}
