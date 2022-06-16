import { Component, OnInit } from '@angular/core';
import {FormateurService} from '../../../../controller/service/formateur.service';
import {MessageService} from 'primeng/api';
import {Formateur} from '../../../../controller/model/formateur.model';
import {Apprenant} from '../../../../controller/model/apprenant.model';
import {ApprenantService} from '../../../../controller/service/apprenant.service';

@Component({
  selector: 'app-create-apprenant',
  templateUrl: './create-apprenant.component.html',
  styleUrls: ['./create-apprenant.component.scss']
})
export class CreateApprenantComponent implements OnInit {

  constructor(private apprenantService: ApprenantService,
              private messageService: MessageService
  ) {
  }

  get createDialog(): boolean {
    return this.apprenantService.createDialog;
  }

  set createDialog(value: boolean) {
    this.apprenantService.createDialog = value;
  }

  get selectedApprenant(): Apprenant {
    return this.apprenantService.selectedApprenant;
  }

  set selectedApprenant(value: Apprenant) {
    this.apprenantService.selectedApprenant = value;
  }

  get apprenants(): Array<Apprenant> {
    return this.apprenantService.apprenants;
  }

  set apprenants(value: Array<Apprenant>) {
    this.apprenantService.apprenants = value;
  }


  ngOnInit(): void {
  }

  save() {
    if (this.selectedApprenant.id === 0) {
      this.apprenantService.register(this.selectedApprenant).subscribe(
          (data) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Learner added',
              life: 3000
            });
            this.apprenants.push(data);
          }, error => {
            this.messageService.add({
              severity: 'error',
              summary: 'error',
              detail: error?.error?.message,
              life: 4000
            });
          }
      );
    } else {
      this.apprenantService.update(this.selectedApprenant).subscribe(
          data => {

            this.messageService.add({
              severity: 'info',
              summary: 'Successful',
              detail: 'Learner updated',
              life: 3000
            });
            for (let i = 0; i < this.apprenants.length; i++) {
              if (this.apprenants[i].id === data.id) {
                this.apprenants[i] = data;
              }
            }
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
    this.createDialog = false;
    this.selectedApprenant = new Apprenant();
  }

}
