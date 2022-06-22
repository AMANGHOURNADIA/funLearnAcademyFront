import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {Formateur} from '../../../../../controller/model/formateur.model';
import {FormateurService} from '../../../../../controller/service/formateur.service';

@Component({
    selector: 'app-contact-area',
    templateUrl: './contact-area.component.html',
    styleUrls: ['./contact-area.component.scss']
})
export class ContactAreaComponent implements OnInit {
    formateur: Formateur = new Formateur();

    constructor(private messageService: MessageService,
                private formateurService: FormateurService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    send() {
        if (this.formateur?.email === undefined || !this.formateur?.email?.includes('@') || !this.formateur?.email.includes('gmail') || !this.formateur.email?.includes('.com')) {
            document.getElementById('email').style.border = '2px solid red';
            return;
        } else {
            document.getElementById('email').style.border = '2px solid green';

        }
        if (this.formateur.username === undefined || this.formateur?.username === null || this.formateur?.username?.length < 4) {
            document.getElementById('username').style.border = '2px solid red';
            return;
        } else {
            document.getElementById('username').style.border = '2px solid green';
        }
        this.formateur.enabled = false;
        this.formateurService.register(this.formateur).subscribe(
            data => {
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'your message has been sent', life: 3000});
                this.router.navigate(['/home']);

            }, error => {
                this.messageService.add({severity: 'error', summary: 'error', detail: error?.error?.message, life: 3000});

            }
        );
    }
}
