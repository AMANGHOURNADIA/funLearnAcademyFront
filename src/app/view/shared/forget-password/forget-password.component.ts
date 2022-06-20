import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  username: string;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }
  forgetPass(email: string){
    this.authService.forgetPass(email).subscribe(data =>{
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'The new password has been sent to your email'
      });

      this.router.navigate(['/sign-in']);

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: error?.error?.message,
      });
    });
  }
}
