import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {SectionService} from '../../../controller/service/section.service';
import {Chapitre} from '../../../controller/model/chapitre.model';
import {ChapitreService} from '../../../controller/service/chapitre.service';
import {Section} from '../../../controller/model/section.model';
import {SujetService} from 'src/app/controller/service/sujet.service';
import {FormateurService} from 'src/app/controller/service/formateur.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthenticationService} from '../../../controller/service/authentication.service';


@Component({
    selector: 'app-manage-section',
    templateUrl: './manage-section.component.html',
    styleUrls: ['./manage-section.component.scss']
})
export class ManageSectionComponent implements OnInit {
    courses: Cours[];
    cours: Cours;

    constructor(private courseService: CoursService,
                private authService: AuthenticationService,
                private messageService: MessageService,
                private sectionService: SectionService) {
    }

    ngOnInit() {
        this.courseService.findAll().subscribe(data => this.courses = data);
        console.log(this.section);
    }

    get showCreateSectionDialog(): boolean {
        return this.courseService.showCreateSectionDialog;
    }

    set showCreateSectionDialog(value: boolean) {
        this.courseService.showCreateSectionDialog = value;
    }

    get section(): Section {
        return this.sectionService.section;
    }

    set section(value: Section) {
        this.sectionService.section = value;
    }

    get sections(): Array<Section> {
        return this.sectionService.sections;
    }

    set sections(value: Array<Section>) {
        this.sectionService.sections = value;
    }

    save() {
        this.section.formateur = this.authService.getFormateurFromLocalCache();
        this.sectionService.save(this.section).subscribe(
            data => {
                this.sections.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'section added',
                    life: 3000
                });
                this.showCreateSectionDialog = false;
                this.section = new Section();
            }, error => {
                console.log(error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'error',
                    detail: error?.error?.message,
                    life: 4000
                });
            }
        );
    }


}
