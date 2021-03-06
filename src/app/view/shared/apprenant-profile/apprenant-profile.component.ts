import {Component, OnInit} from '@angular/core';
import {Apprenant} from '../../../controller/model/apprenant.model';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {Cours} from '../../../controller/model/cours.model';
import {ApprenantService} from '../../../controller/service/apprenant.service';
import {MessageService} from 'primeng/api';
import {Role} from '../../../enum/role.enum';
import {FormateurService} from '../../../controller/service/formateur.service';
import {CoursService} from '../../../controller/service/cours.service';
import {InscriptionService} from '../../../controller/service/inscription.service';
import {Inscription} from '../../../controller/model/inscription.model';

@Component({
    selector: 'app-apprenant-profile',
    templateUrl: './apprenant-profile.component.html',
    styleUrls: ['./apprenant-profile.component.scss']
})
export class ApprenantProfileComponent implements OnInit {
    user: any = new Apprenant();
    selectedElement = 'PROFILE' || 'SET' || 'PASS' || 'INSCRIPTION';
    newPassword: string;
    newPasswordRepated: string;
    courses: Array<Cours> = new Array<Cours>();
    inscriptions: Array<Inscription> = new Array<Inscription>();
    public role = Role;
    courseData: Array<Cours> = new Array<Cours>();

    constructor(private authService: AuthenticationService,
                private messageService: MessageService,
                private courseService: CoursService,
                private inscriptionService: InscriptionService,
                private apprenantService: ApprenantService,
                private formateurService: FormateurService,
    ) {
    }

    ngOnInit(): void {
        if (this.authService.getFormateurFromLocalCache() !== null) {
            this.user = this.authService.getApprenantFromLocalCache();
            if (this.user.role === this.role.FORMATEUR){
                this.courseService.findAllByFormateurId(this.user.id).subscribe(
                    data => {
                        this.courseData = data;
                    }
                );
            } else if (this.user.role === this.role.APPRENANT) {
                this.inscriptionService.findAllByApprenantId(this.authService.getApprenantFromLocalCache().id).subscribe(
                    (data) => {
                        this.inscriptions = data;
                    }, error => {
                        console.log(error);
                    }
                );
            }
        }
    }


    showMenuElemnt(elemnent: string) {
        this.selectedElement = elemnent;
    }

    updateUser(user: Apprenant) {
        if (user.role === Role.APPRENANT) {
            this.apprenantService.update(user).subscribe(
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
        } else {
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
