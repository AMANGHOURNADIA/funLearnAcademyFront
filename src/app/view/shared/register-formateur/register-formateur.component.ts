import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../../controller/model/user.model';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {FormateurService} from '../../../controller/service/formateur.service';
import {Formateur} from '../../../controller/model/formateur.model';

@Component({
  selector: 'app-register-formateur',
  templateUrl: './register-formateur.component.html',
  styleUrls: ['./register-formateur.component.scss']
})
export class RegisterFormateurComponent implements OnInit {
  formateur: Formateur = new Formateur();
  private subscriptions: Subscription[] = [];
  constructor(private authService: AuthenticationService,
              private router: Router,
              private fourmateurService: FormateurService,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }
  signUp() {
    this.fourmateurService.register(this.formateur).subscribe(
        data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registration added, welcome ' + this.formateur.fullname + ' in our community',
            life: 3000
          });
          this.router.navigateByUrl('login');
        }, (error: HttpErrorResponse) => {
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

}
