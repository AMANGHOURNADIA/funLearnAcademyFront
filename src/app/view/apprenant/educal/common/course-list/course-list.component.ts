import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../../../../controller/service/cours.service';
import {Cours} from '../../../../../controller/model/cours.model';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

    courseData: Cours[];

    constructor(private courseService: CoursService) {
    }

    ngOnInit(): void {
        this.courseService.findAll().subscribe(data => {
            this.courseData = data;
        });
    }

}
