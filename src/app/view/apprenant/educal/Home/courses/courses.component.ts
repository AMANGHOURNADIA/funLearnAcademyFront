import {Component, OnInit} from '@angular/core';
import {Cours} from '../../../../../controller/model/cours.model';
import {CoursService} from '../../../../../controller/service/cours.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

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
