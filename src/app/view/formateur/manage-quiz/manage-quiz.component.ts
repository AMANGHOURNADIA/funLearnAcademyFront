import { Component, OnInit } from '@angular/core';
import {Question} from '../../../controller/model/question.model';
import {QuestionService} from '../../../controller/service/question.service';
import {Cours} from '../../../controller/model/cours.model';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CoursService} from '../../../controller/service/cours.service';

@Component({
  selector: 'app-manage-quiz',
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.scss']
})
export class ManageQuizComponent implements OnInit {
  selectedcours: Array<Cours> = new Array<Cours>();
  cols: any[];
  courses: Array<Cours> = new Array<Cours>();



  constructor(private questionService: QuestionService, private courseService: CoursService, private confirmationService: ConfirmationService, private authService: AuthenticationService, private messageService: MessageService) { }

  get showCreateQuizDialog(): boolean {
    return this.questionService.showCreateQuizDialog;
  }

  set showCreateQuizDialog(value: boolean) {
    this.questionService.showCreateQuizDialog = value;
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
    this.questionService.findAll().subscribe(data => {
      this.questions = data;
      console.log(data);
    });
    console.log(this.question);
  }
  saveQuestion() {
    this.question.formateur = this.authService.getFormateurFromLocalCache();
    this.questionService.save(this.question).subscribe(
        data => {
          this.questions.push({...data});
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'question added',
            life: 3000
          });
          this.showCreateQuizDialog = false;
          this.question = new Question();
        }, error => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'error',
            detail: error?.error?.message,
            life: 4000
          });
        }
    );
  }

  showCreateQuizDialogFct() {
    this.showCreateQuizDialog = true;
    console.log(this.showCreateQuizDialog);
  }

  updateQuestion(question: Question) {
    this.showCreateQuizDialog = true;
    this.question = question;
  }

  deleteById(id) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this question ?',
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
            detail: 'question deleted ',
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
}
