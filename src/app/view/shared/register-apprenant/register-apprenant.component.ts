import { Component, OnInit } from '@angular/core';
import {User} from '../../../controller/model/user.model';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {HttpErrorResponse} from '@angular/common/http';
import {ApprenantService} from '../../../controller/service/apprenant.service';
import {Apprenant} from '../../../controller/model/apprenant.model';

@Component({
  selector: 'app-register-apprenant',
  templateUrl: './register-apprenant.component.html',
  styleUrls: ['./register-apprenant.component.scss']
})
export class RegisterApprenantComponent implements OnInit {
  apprenant: Apprenant = new Apprenant();
  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthenticationService,
              private apprenantService: ApprenantService,
              private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }
  signUp() {
    this.apprenantService.register(this.apprenant).subscribe(
        data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registration added, welcome ' + this.apprenant.fullname + ' in our community',
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
