import {Component, OnInit} from '@angular/core';
import {FormateurService} from '../../../controller/service/formateur.service';
import {Formateur} from '../../../controller/model/formateur.model';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
    selector: 'app-manage-formtaeur',
    templateUrl: './manage-formtaeur.component.html',
    styleUrls: ['./manage-formtaeur.component.scss']
})
export class ManageFormtaeurComponent implements OnInit {
    selectes: Array<Formateur>;
    formateur: Formateur = new Formateur();
    cols: any;

    constructor(private formateurService: FormateurService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService
    ) {
    }

    get formateurs(): Array<Formateur> {
        return this.formateurService.formateurs;
    }

    set formateurs(value: Array<Formateur>) {
        this.formateurService.formateurs = value;
    }

    get selectedFormateur(): Formateur {
        return this.formateurService.selectedFormateur;
    }

    set selectedFormateur(value: Formateur) {
        this.formateurService.selectedFormateur = value;
    }

    get createDialog(): boolean {
        return this.formateurService.createDialog;
    }

    set createDialog(value: boolean) {
        this.formateurService.createDialog = value;
    }

    ngOnInit(): void {
        this.formateurService.findAll().subscribe(
            data => {
                this.formateurs = data;
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

    createFormateur() {
        this.createDialog = true;
    }

    deleteMultiple() {

    }

    findByCriteria() {

    }

    edit(formateur: Formateur) {
        this.selectedFormateur = formateur;
        this.createDialog = true;
    }

    view(formateur: Formateur) {

    }

    delete(formateur: Formateur) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the professor?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.formateurService.deleteFormateur(formateur).subscribe(data => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Professor Deleted',
                        life: 3000
                    });
                });

                for (let i = 0; i < this.formateurs.length; i++) {
                    if (this.formateurs[i].id === formateur.id) {
                        this.formateurs.splice(i, 1);
                    }
                }
            }
        });

    }
}
