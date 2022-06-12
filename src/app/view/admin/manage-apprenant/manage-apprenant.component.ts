import { Component, OnInit } from '@angular/core';
import {Formateur} from '../../../controller/model/formateur.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Apprenant} from '../../../controller/model/apprenant.model';
import {ApprenantService} from '../../../controller/service/apprenant.service';

@Component({
  selector: 'app-manage-apprenant',
  templateUrl: './manage-apprenant.component.html',
  styleUrls: ['./manage-apprenant.component.scss']
})
export class ManageApprenantComponent implements OnInit {
  selectes: Array<Apprenant>;
  apprenant: Apprenant = new Apprenant();
  cols: any;

  constructor(private apprenantService: ApprenantService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService
  ) {
  }

  get apprenants(): Array<Apprenant> {
    return this.apprenantService.apprenants;
  }

  set apprenants(value: Array<Apprenant>) {
    this.apprenantService.apprenants = value;
  }

  get selectedApprenant(): Apprenant {
    return this.apprenantService.selectedApprenant;
  }

  set selectedApprenant(value: Apprenant) {
    this.apprenantService.selectedApprenant = value;
  }

  get createDialog(): boolean {
    return this.apprenantService.createDialog;
  }

  set createDialog(value: boolean) {
    this.apprenantService.createDialog = value;
  }

  ngOnInit(): void {
    this.apprenantService.findAll().subscribe(
        data => {
          this.apprenants = data;
          console.log(data);
        }, error => {
          console.log(error);
        }
    );
  }


  private initCol() {
    this.cols = [
      {field: 'fullname', header: 'Name'},
      {field: 'username', header: 'Username'},
      {field: 'phone', header: 'Phone'},
      {field: 'email', header: 'Email'},

    ];
  }

  createApprenant() {
    this.createDialog = true;
  }

  deleteMultiple() {

  }

  findByCriteria() {

  }

  edit(apprenant: Apprenant) {
    this.selectedApprenant = apprenant;
    this.createDialog = true;
  }

  view(apprenant: Apprenant) {

  }

  delete(apprenant: Apprenant) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this learner?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apprenantService.deleteApprenant(apprenant).subscribe(data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'learner Deleted',
            life: 3000
          });
        });

        for (let i = 0; i < this.apprenants.length; i++) {
          if (this.apprenants[i].id === apprenant.id) {
            this.apprenants.splice(i, 1);
          }
        }
      }
    });

  }

  save() {

  }
}
