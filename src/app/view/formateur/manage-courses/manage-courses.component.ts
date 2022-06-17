import {Component, OnInit} from '@angular/core';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {Chapitre} from '../../../controller/model/chapitre.model';
import {Section} from '../../../controller/model/section.model';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {SectionService} from '../../../controller/service/section.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ChapitreService} from '../../../controller/service/chapitre.service';

@Component({
    selector: 'app-manage-courses',
    templateUrl: './manage-courses.component.html',
    styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {
    selectedCourses: Array<Cours> = new Array<Cours>();
    cols: any[];

    selectedSections: Array<Section> = new Array<Section>();
    sections: Array<Section> = new Array<Section>();
    section: Section;
    chapitre: Chapitre;
    selectedChapitres: Array<Chapitre> = new Array<Chapitre>();
    chapitres: Array<Chapitre> = new Array<Chapitre>();





    constructor(private courseService: CoursService, private chapitreService: ChapitreService, private confirmationService: ConfirmationService, private messageService: MessageService, private authService: AuthenticationService, private sectionService: SectionService) {
    }

    get showCreateSectionDialog(): boolean {
        return this.courseService.showCreateSectionDialog;
    }

    set showCreateSectionDialog(value: boolean) {
        this.courseService.showCreateSectionDialog = value;
    }

    get showCreateChapDialog(): boolean {
        return this.courseService.showCreateChapitreDialog;
    }

    set showCreateChapDialog(value: boolean) {
        this.courseService.showCreateChapitreDialog = value;
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

    ngOnInit(): void {
        this.courseService.findAllByFormateurId(this.authService.getFormateurFromLocalCache().id).subscribe(
            data => {
                console.log(data);
                this.courses = data;
            }
        );
    }

    updateCourse(course: Cours) {
        this.showCreateCourseDialog = true;
        this.cours = course;
    }

    findByCourseId(id: number) {
        this.sectionService.findByCoursId(id).subscribe((data) => {
            this.sections = data;
            if (data.length === 0) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'course orgisd section ',
                    life: 3000
                });
            }
        }, error => {
            this.messageService.add({
                severity: 'error',
                summary: 'error',
                detail: error?.error?.message,
                life: 4000
            });
        });
    }

    deleteCourse(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this course ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.courseService.delete(id).subscribe((data) => {
                    for (let i = 0; i < this.courses.length; i++) {
                        if (id === this.courses[i].id) {
                            this.courses.splice(i, 1);
                        }
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'course deleted ',
                        life: 3000
                    });
                }, error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'error',
                        detail: error?.error?.message,
                        life: 4000
                    });
                });
            }
        });
    }

    updateSection(section: Section) {
        this.showCreateSectionDialog = true;
        this.section = section;
    }

    findBySectionId(id: number) {
        this.chapitreService.findBySectionId(id).subscribe((data) => {
            this.chapitres = data;
            if (data.length === 0) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'section orgisd chapter ',
                    life: 3000
                });
            }
        }, error => {
            this.messageService.add({
                severity: 'error',
                summary: 'error',
                detail: error?.error?.message,
                life: 4000
            });
        });
    }

    deleteSection(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this section ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.sectionService.delete(id).subscribe((data) => {
                    for (let i = 0; i < this.sections.length; i++) {
                        if (id === this.sections[i].id) {
                            this.sections.splice(i, 1);
                        }
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'section deleted ',
                        life: 3000
                    });
                }, error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'error',
                        detail: error?.error?.message,
                        life: 4000
                    });
                });
            }
        });
    }

    updateChap(chapitre: Chapitre) {
        this.showCreateChapDialog = true;
        this.chapitre = chapitre;
    }

    deleteById(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this chapter ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.chapitreService.delete(id).subscribe((data) => {
                    for (let i = 0; i < this.chapitres.length; i++) {
                        if (id === this.chapitres[i].id) {
                            this.chapitres.splice(i, 1);
                        }
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'chapter deleted ',
                        life: 3000
                    });
                }, error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'error',
                        detail: error?.error?.message,
                        life: 4000
                    });
                });
            }
        });
    }

    showCreateCourseDialogFct() {
        this.showCreateCourseDialog = true;
        console.log(this.showCreateCourseDialog);
    }
}
