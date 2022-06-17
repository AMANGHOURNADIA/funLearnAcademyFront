import {Component, OnInit} from '@angular/core';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {Sujet} from '../../../controller/model/sujet.model';
import {SujetService} from '../../../controller/service/sujet.service';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-create-course',
    templateUrl: './manage-course.component.html',
    styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {
    sujets: Sujet[];

    constructor(private courseService: CoursService,
                private authService: AuthenticationService,
                private messageService: MessageService,
                private sujetService: SujetService) {
    }

    ngOnInit(): void {
        this.sujetService.findAll().subscribe(data => this.sujets = data);
        console.log(this.cours);
    }

    get showCreateCourseDialog(): boolean {
        return this.courseService.showCreateCourseDialog;
    }

    set showCreateCourseDialog(value: boolean) {
        this.courseService.showCreateCourseDialog = value;
    }

    get cours(): Cours {
        return this.courseService.cours;
    }

    set cours(value: Cours) {
        this.courseService.cours = value;
    }

    get courses(): Array<Cours> {
        return this.courseService.courses;
    }

    set courses(value: Array<Cours>) {
        this.courseService.courses = value;
    }

    save() {
        this.cours.formateur = this.authService.getFormateurFromLocalCache();
        this.courseService.save(this.cours).subscribe(
            data => {
                this.courses.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Course added',
                    life: 3000
                });
                this.showCreateCourseDialog = false;
                this.cours = new Cours();
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
