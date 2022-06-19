import { Component, OnInit } from '@angular/core';
import {Admin} from '../../../controller/model/admin.model';
import {Cours} from '../../../controller/model/cours.model';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {MessageService} from 'primeng/api';
import {AdminService} from '../../../controller/service/admin.service';
import {Formateur} from '../../../controller/model/formateur.model';
import {FormateurService} from '../../../controller/service/formateur.service';

@Component({
  selector: 'app-formateur-profile',
  templateUrl: './formateur-profile.component.html',
  styleUrls: ['./formateur-profile.component.scss']
})
export class FormateurProfileComponent implements OnInit {

  user: Formateur = new Formateur();
  selectedElement = 'PROFILE' || 'SET' || 'PASS' || 'INSCRIPTION';
  newPassword: string;
  newPasswordRepated: string;
  courses: Array<Cours> = new Array<Cours>();


  constructor(private authService: AuthenticationService,
              private messageService: MessageService,
              private formateurService: FormateurService
  ) {
  }

  ngOnInit(): void {
    if (this.authService.getFormateurFromLocalCache() !== null) {
      this.user = this.authService.getFormateurFromLocalCache();
    }
  }


  showMenuElemnt(elemnent: string) {
    this.selectedElement = elemnent;
  }

  updateUser(user: Formateur) {
    this.formateurService.update(user).subscribe(
        data => {
          this.user = data;
          this.authService.addUserToLocalCache(data);
          this.messageService.add({
            severity: 'info',
            summary: 'Successful',
            detail: 'information updated successfully',
            life: 3000
          });
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


  showPass(newPass: HTMLInputElement) {
    if (newPass.type === 'password') {
      newPass.type = 'text';
    } else {
      newPass.type = 'password';
    }
  }

  changePassword() {
    if (this.newPassword === this.newPasswordRepated) {
      let user = this.authService.getUserFromLocalCache();
      user.password = this.newPassword;
      this.authService.resetPass(user).subscribe(
          data => {
            this.messageService.add({
              severity: 'info',
              summary: 'Successful',
              detail: 'Password has been change successfully',
              life: 3000
            });
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
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Password invalid',
        life: 4000
      });
    }
  }
}
