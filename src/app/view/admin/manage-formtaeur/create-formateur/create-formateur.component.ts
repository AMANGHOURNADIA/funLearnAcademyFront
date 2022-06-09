import {Component, OnInit} from '@angular/core';
import {FormateurService} from '../../../../controller/service/formateur.service';
import {Formateur} from '../../../../controller/model/formateur.model';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-create-formateur',
    templateUrl: './create-formateur.component.html',
    styleUrls: ['./create-formateur.component.scss']
})
export class CreateFormateurComponent implements OnInit {


    constructor(private formateurService: FormateurService,
                private messageService: MessageService
    ) {
    }

    get createDialog(): boolean {
        return this.formateurService.createDialog;
    }

    set createDialog(value: boolean) {
        this.formateurService.createDialog = value;
    }

    get selectedFormateur(): Formateur {
        return this.formateurService.selectedFormateur;
    }

    set selectedFormateur(value: Formateur) {
        this.formateurService.selectedFormateur = value;
    }

    get formateurs(): Array<Formateur> {
        return this.formateurService.formateurs;
    }

    set formateurs(value: Array<Formateur>) {
        this.formateurService.formateurs = value;
    }


    ngOnInit(): void {
    }

    save() {
        if (this.selectedFormateur.id === 0) {
            this.formateurService.register(this.selectedFormateur).subscribe(
                (data) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Formateur added',
                        life: 3000
                    });
                    this.formateurs.push(data);
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
            this.formateurService.update(this.selectedFormateur).subscribe(
                data => {

                    this.messageService.add({
                        severity: 'info',
                        summary: 'Successful',
                        detail: 'Formateur updated',
                        life: 3000
                    });
                    for (let i = 0; i < this.formateurs.length; i++) {
                        if (this.formateurs[i].id === data.id) {
                            this.formateurs[i] = data;
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
        this.selectedFormateur = new Formateur();
    }
}
