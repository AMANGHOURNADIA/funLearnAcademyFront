import {Component, OnInit} from '@angular/core';
import SwiperCore, {Autoplay, Pagination} from 'swiper';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../../controller/service/authentication.service';
import {CoursService} from '../../../../../controller/service/cours.service';
import {Cours} from '../../../../../controller/model/cours.model';
// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([ Pagination, Autoplay]);

@Component({
  selector: 'app-course-details-area',
  templateUrl: './course-details-area.component.html',
  styleUrls: ['./course-details-area.component.scss']
})
export class CourseDetailsAreaComponent implements OnInit {

  courseData = [
    {
      id: 1,
      courseImage: "assets/img/course/course-1.jpg",
      listImg: "assets/img/course/list/course-1.jpg",
      lesson: "43",
      title: "Become a product Manager learn the skills & job.",
      rating: "4.5",
      teacherImg: "assets/img/course/teacher/teacher-1.jpg",
      teacherName: "Jim Séchen",
      category: "Art & Design",
      price: "21.00",
      oldPrice: "33.00" //1
    },
    {
      id: 2,
      courseImage: "assets/img/course/course-2.jpg",
      listImg: "assets/img/course/list/course-2.jpg",
      lesson: "72",
      title: "Fundamentals of music theory Learn new",
      rating: "4.0",
      teacherImg: "assets/img/course/teacher/teacher-2.jpg",
      teacherName: "Barry Tone",
      category: "UX Design",
      price: "32.00",
      oldPrice: "68.00",
      color: "sky-blue"
    },
    {
      id: 3,
      courseImage: "assets/img/course/course-3.jpg",
      listImg: "assets/img/course/list/course-3.jpg",
      lesson: "35",
      title: "Bases Matemáticas dios Álgebra Ecuacion",
      rating: "4.3",
      teacherImg: "assets/img/course/teacher/teacher-3.jpg",
      teacherName: "Samuel Serif",
      category: "Development",
      price: "13.00",
      oldPrice: "19.00",
      color: "green"
    },
    {
      id: 4,
      courseImage: "assets/img/course/course-4.jpg",
      listImg: "assets/img/course/list/course-4.jpg",
      lesson: "60",
      title: "Strategy law and organization Foundation",
      rating: "3.5",
      teacherImg: "assets/img/course/teacher/teacher-4.jpg",
      teacherName: "Elon Gated",
      category: "Development",
      price: "62.00",
      oldPrice: "97.00",
      color: "blue"
    },
    {
      id: 5,
      courseImage: "assets/img/course/course-5.jpg",
      listImg: "assets/img/course/list/course-5.jpg",
      lesson: "28",
      title: "The business Intelligence analyst Course 2022",
      rating: "4.5",
      teacherImg: "assets/img/course/teacher/teacher-5.jpg",
      teacherName: "Eleanor Fant",
      category: "Marketing",
      price: "25.00",
      oldPrice: "36.00",
      color: "orange"
    },
  ];

  constructor(private router: Router,
              private courseService: CoursService,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    console.log(this.selectedCourse);
  }

  get selectedCourse(): Cours {
    return this.courseService.selectedCourse;
  }

  set selectedCourse(value: Cours) {
    this.courseService.selectedCourse = value;
  }

  goTo() {
    if (this.authService.isUserLoggedIn()){
      this.router.navigate(['/payment']);
    } else {
      this.router.navigate(['/sign-in']);

    }
  }
}
