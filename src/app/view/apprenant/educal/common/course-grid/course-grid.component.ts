import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../../../../controller/service/cours.service';
import {Cours} from '../../../../../controller/model/cours.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {

  courseData: Array<Cours> = new Array<Cours>();


  constructor(private courseService: CoursService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.findAll().subscribe(
        data => {
          this.courseData = data;
        }
    );
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
