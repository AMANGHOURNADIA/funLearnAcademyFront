import {Component, OnInit} from '@angular/core';
import {User} from '../../../../../controller/model/user.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AuthenticationService} from '../../../../../controller/service/authentication.service';
import {Role} from '../../../../../enum/role.enum';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {

  user: User = new User();
  public showLoading: boolean | undefined;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router, private messageService: MessageService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

    if (this.authenticationService.isUserLoggedIn()) {
      this.user = this.authenticationService.getUserFromLocalCache();
      if (this.user.role === Role.FORMATEUR) {
        this.router.navigateByUrl('/formateur/courses');
      } else if (this.user.role === Role.ADMIN) {
        this.router.navigateByUrl('/admin/manage/categories');
      } else {
        this.router.navigateByUrl('');
      }

    } else {
      this.router.navigateByUrl('/login');
    }
  }

  public onLogin(user: User): void {
    this.showLoading = true;
    this.subscriptions.push(
        this.authenticationService.login(user).subscribe(
            (response: HttpResponse<User>) => {
              const token = response.body.token;
              this.authenticationService.saveToken(token);
              this.authenticationService.addUserToLocalCache(response.body);
              if (response.body.role === Role.FORMATEUR) {
                this.router.navigateByUrl('/formateur/courses');
              } else if (response.body.role === Role.ADMIN) {
                this.router.navigateByUrl('/admin/manage/categories');
              } else {
                this.router.navigateByUrl('');
              }
              this.showLoading = false;
            },
            (errorResponse: HttpErrorResponse) => {
              this.showLoading = false;
              this.messageService.add({
                severity: 'error',
                summary: 'error',
                detail: errorResponse?.error?.message,
                life: 4000
              });
            }
        )
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
