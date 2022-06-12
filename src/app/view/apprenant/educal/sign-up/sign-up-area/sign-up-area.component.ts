import {Component, OnInit} from '@angular/core';
import {User} from '../../../../../controller/model/user.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Role} from '../../../../../enum/role.enum';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AuthenticationService} from '../../../../../controller/service/authentication.service';
import {Apprenant} from '../../../../../controller/model/apprenant.model';
import {ApprenantService} from '../../../../../controller/service/apprenant.service';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {
  apprenant: Apprenant = new Apprenant();
  user: User = new User();
  public showLoading: boolean | undefined;
  private subscriptions: Subscription[] = [];
  constructor(private router: Router, private messageService: MessageService, private apprenantService: ApprenantService) { }

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
