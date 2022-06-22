import {Component, OnInit} from '@angular/core';
import {Cours} from '../../../../../controller/model/cours.model';
import {CoursService} from '../../../../../controller/service/cours.service';
import {InscriptionService} from '../../../../../controller/service/inscription.service';
import {AuthenticationService} from '../../../../../controller/service/authentication.service';
import {Inscription} from '../../../../../controller/model/inscription.model';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
    selector: 'app-payement',
    templateUrl: './payement.component.html',
    styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {
    inscription: Inscription = new Inscription();

    constructor(private courseService: CoursService,
                private messageService: MessageService,
                private router: Router,
                private inscriptionService: InscriptionService,
                private authService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.inscriptionService.findAllByApprenantId(this.authService.getApprenantFromLocalCache().id).subscribe(
            (data) => {
                console.log(data);
                for (const item of data){
                    if (item.cours.id === this.selectedCourse?.id){
                        this.messageService.add({
                            severity: 'info',
                            detail: 'You are already pay this course, you can find it at your profile.',
                            life: 4000
                        });
                        this.router.navigate(['/profile']);
                    }
                }
            }, error => {
                console.log(error);
            }
        );
    }

    get selectedCourse(): Cours {
        return this.courseService.selectedCourse;
    }

    pay() {
        this.inscription.apprenant = this.authService.getApprenantFromLocalCache();
        this.inscription.cours = this.selectedCourse;
        console.log(this.inscription);
        this.inscriptionService.save(this.inscription).subscribe(
            data => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'payment success ',
                    life: 3000
                });
                this.router.navigate(['/profile']);
            }, error => {
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
