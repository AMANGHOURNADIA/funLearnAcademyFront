import {Component, OnInit} from '@angular/core';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {Chapitre} from '../../../controller/model/chapitre.model';
import {Section} from '../../../controller/model/section.true';
import {AuthenticationService} from '../../../controller/service/authentication.service';

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
    selectedChapitres: Array<Chapitre> = new Array<Chapitre>();
    chapitres: Array<Chapitre> = new Array<Chapitre>();

    constructor(private courseService: CoursService, private authService: AuthenticationService) {
    }

    get showCreateSectionDialog(): boolean {
        return this.courseService.showCreateSectionDialog;
    }

    set showCreateSectionDialog(value: boolean) {
        this.courseService.showCreateSectionDialog = value;
    }

    get showCreateChapDialog(): boolean {
        return this.courseService.showCreateChapDialog;
    }

    set showCreateChapDialog(value: boolean) {
        this.courseService.showCreateChapDialog = value;
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

    }

    findByCourseId(id: number) {

    }

    deleteCourse(id: number) {

    }

    updateSection(section: Section) {

    }

    findBySectionId(id: number) {

    }

    deleteSection(id: number) {

    }

    updateChap(chap: Chapitre) {

    }

    deleteById(id: number) {

    }

    showCreateCourseDialogFct() {
        this.showCreateCourseDialog = true;
        console.log(this.showCreateCourseDialog);
    }
}
