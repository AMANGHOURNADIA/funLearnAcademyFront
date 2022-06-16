import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {SectionService} from '../../../controller/service/section.service';
import {Section} from '../../../controller/model/section.true';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/controller/model/quiz.model';
import { QuizService } from 'src/app/controller/service/quiz.service';
import { QuestionService } from 'src/app/controller/service/question.service';
import { Question } from 'src/app/controller/model/question.model';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {

  cols: any[];
  couchedTd = null;
  selectedcours: Cours = new Cours();
  showCreatecoursDialog: boolean;
  showCreatesectionDialog: boolean;
  showCreatechapitreDialog: boolean;
  sujetId : number;
  formateurId : number;
  newQuiz : Quiz = null;
    selectedselections: any;


  constructor(private coursService: CoursService,
              private confirmationService: ConfirmationService,
              private sectionService: SectionService,
              private messageService: MessageService,
              private quizService : QuizService,
              private questionService : QuestionService,
              private router : Router,
              private route :ActivatedRoute) {
  }





  get cours(): Cours {
    return this.coursService.cours;
  }

  set cours(value: Cours) {
    this.coursService.cours = value;
  }


  get section(): Section {
    return this.sectionService.section;
  }

  set section(value: Section) {
    this.sectionService.section = value;
  }

  get sections(): Array<Section> {
    return this.sectionService.sections;
  }

  set sections(value: Array<Section>) {
    this.sectionService.sections = value;
  }

  get quiz(): Quiz {
    return this.quizService.quiz;
  }

  set quiz(value: Quiz) {
    this.quizService.quiz = value;
  }

  get quizes(): Array<Quiz> {
    return this.quizService.quizes;
  }

  set quizes(value: Array<Quiz>) {
    this.quizService.quizes = value;
  }


  get question(): Question {
    return this.questionService.question;
  }

  set question(value: Question) {
    this.questionService.question = value;
  }

  get questions(): Array<Question> {
    return this.questionService.questions;
  }

  set questions(value: Array<Question>) {
    this.questionService.questions = value;
  }



  ngOnInit(): void {

    this.quiz = null
    this.route.params.subscribe( params => {
      this.coursService.findById(params.id).subscribe( (data) => {
        this.cours = data;
        console.log(this.cours);
        this.quizService.findAll().subscribe((data) => {
          this.quizes = data;
          console.log(this.quizes);
          this.quizes.forEach( (quiz) => {
            if(quiz.cours.id == this.cours.id){
              this.quiz = quiz;
            }
          });
          console.log(this.quiz);
          if(this.quiz == null){
            this.newQuiz = new Quiz();
            this.newQuiz.cours = this.cours;
            this.newQuiz.ref = this.cours.name + '_quiz';
            this.quizService.save(this.newQuiz).subscribe( (data) => {
              this.quiz = data;
            });        
          }
          console.log(this.quiz);
          this.sectionService.findAll().subscribe( (data) => {
            this.sections = data.filter( (sec) => sec.cours.id == this.cours.id)       
          });
          this.questionService.findAll().subscribe( (data) => {
            this.questions = data.filter( (sec) => sec.quiz.id == this.quiz.id)       
          });
        });


        
      });
    });
    



    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'cat_name', header: 'Name'},
      {field: 'cat_code', header: 'Code'}
    ];

    
  }


  onSelectSection(section) {
    this.router.navigate(['/formateur/section',section.id]);
  }


  setNewSection(){
    this.showCreatesectionDialog = true;
    this.section = new Section();
  }

  saveSection() {
    this.section.cours = this.cours
    if (this.section.id === 0) {
      this.showCreatesectionDialog = false;
      this.sectionService.save(this.section).subscribe((data) => {
        this.sections.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'section added',
          life: 3000
        });
        this.section = new Section();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
    } else {
      this.showCreatesectionDialog = false;
      this.sectionService.save(this.section).subscribe((data) => {
        for (let i = 0; i < this.sections.length; i++) {
          if (data.id === this.sections[i].id) {
            this.sections[i] = data;
          }
        }
        this.messageService.add({
          severity: 'info',
          summary: 'Successful',
          detail: 'section update',
          life: 3000
        });
        this.section = new Section();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
    }

  }
  public deleteSection(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this section ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.sectionService.deleteSection(id).subscribe((data) => {
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
    window.location.reload();
  }


  updatesection(section: Section) {
    this.showCreatesectionDialog = true;
    this.section = section;
    this.section.cours = this.cours
    
  }

  setNewQuestion(){
    this.showCreatechapitreDialog = true;
    this.question = new Question();
  }
  
  saveQuestion() {

    this.question.quiz = this.quiz;
    console.log(this.question);
    
    if (this.question.id === 0) {
      this.showCreatechapitreDialog = false;
      this.questionService.save(this.question).subscribe((data) => {
        this.questions.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'question added',
          life: 3000
        });
        this.question = new Question();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
      this.question = new Question();
    } else {
      this.showCreatechapitreDialog = false;
      this.questionService.save(this.question).subscribe((data) => {
        for (let i = 0; i < this.questions.length; i++) {
          if (data.id === this.questions[i].id) {
            this.questions[i] = data;
          }
        }
        this.messageService.add({
          severity: 'info',
          summary: 'Successful',
          detail: 'Question update',
          life: 3000
        });
        this.question = new Question();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
    }
    window.location.reload();
    
  }



  public deleteById(id: number) {
    console.log(id);
    
    
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this chapitre ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.questionService.delete(id).subscribe((data) => {
          for (let i = 0; i < this.questions.length; i++) {
            if (id === this.questions[i].id) {
              this.questions.splice(i, 1);
            }
          }
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Question deleted ',
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



  public updateQuestion(question: Question) {
    this.showCreatechapitreDialog = true;
    this.question = question;
  }


  findBySectionId(){

  }
}
