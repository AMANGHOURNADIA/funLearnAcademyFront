import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../../controller/service/cours.service';

@Component({
    selector: 'app-manage-section',
    templateUrl: './manage-section.component.html',
    styleUrls: ['./manage-section.component.scss']
})
export class ManageSectionComponent implements OnInit {
    constructor(private courseService: CoursService) {
    }
    ngOnInit(): void {
    }

    get showCreateSectionDialog(): boolean {
        return this.courseService.showCreateSectionDialog;
    }

    set showCreateSectionDialog(value: boolean) {
        this.courseService.showCreateSectionDialog = value;
    }

}
