import { Component, OnInit } from '@angular/core';
import {User} from '../../../controller/model/user.model';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register-apprenant',
  templateUrl: './register-apprenant.component.html',
  styleUrls: ['./register-apprenant.component.scss']
})
export class RegisterApprenantComponent implements OnInit {
  user: User = new User();
  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthenticationService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }
  signUp() {
    this.authService.register(this.user).subscribe(
        data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registration added, welcome ' + this.user.fullname + ' in our community',
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
