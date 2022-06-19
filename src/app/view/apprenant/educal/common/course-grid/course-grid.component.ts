import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../../../../controller/service/cours.service';
import {Cours} from '../../../../../controller/model/cours.model';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {

  courseData: Array<Cours> = new Array<Cours>();


  constructor(private courseService: CoursService) { }

  ngOnInit(): void {
    this.courseService.findAll().subscribe(
        data => {
          this.courseData = data;
        }
    );
  }

}
