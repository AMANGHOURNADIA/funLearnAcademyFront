import {Component, OnInit} from '@angular/core';
import {Cours} from '../../../../../controller/model/cours.model';
import {CoursService} from '../../../../../controller/service/cours.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

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
