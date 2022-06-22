import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../../../../controller/service/cours.service';
import {Cours} from '../../../../../controller/model/cours.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

    courseData: Cours[];

    constructor(private courseService: CoursService, private router: Router) {
    }

    ngOnInit(): void {
        this.courseService.findAll().subscribe(data => {
            this.courseData = data;
        });
    }
    get selectedCourse(): Cours {
        return this.courseService.selectedCourse;
    }

    set selectedCourse(value: Cours) {
        this.courseService.selectedCourse = value;
    }

    selectedCourseFct(course: Cours) {
        this.selectedCourse = course;
        this.router.navigate(['/course-details']);

    }
}
