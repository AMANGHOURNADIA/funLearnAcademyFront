import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {SectionService} from '../../../controller/service/section.service';
import {Chapitre} from '../../../controller/model/chapitre.model';
import {ChapitreService} from '../../../controller/service/chapitre.service';
import {Section} from '../../../controller/model/section.true';
import {SujetService} from 'src/app/controller/service/sujet.service';
import {FormateurService} from 'src/app/controller/service/formateur.service';
import {Formateur} from 'src/app/controller/model/formateur.model';
import {Sujet} from 'src/app/controller/model/sujet.true';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-manage-section',
    templateUrl: './manage-section.component.html',
    styleUrls: ['./manage-section.component.scss']
})
export class ManageSectionComponent implements OnInit {

    cols: any[];
    couchedTd = null;
    selectedcours: Cours = new Cours();
    showCreatecoursDialog: boolean;
    showCreatesectionDialog: boolean;
    showCreatechapitreDialog: boolean;
    imageFile: File = null;
    videoFile: File = null;
    shortLink: string = '';


    constructor(private coursService: CoursService,
                private confirmationService: ConfirmationService,
                private sectionService: SectionService,
                private chapitreService: ChapitreService,
                private messageService: MessageService,
                private formateurService: FormateurService,
                private sujetService: SujetService,
                private router: Router,
                private route: ActivatedRoute) {

        this.route.params.subscribe(params => {
            this.sectionService.findById(params.id).subscribe((data) => {
                this.section = data;
                console.log(data);

            });
        });
    }


    get cours(): Cours {
        return this.coursService.cours;
    }

    set cours(value: Cours) {
        this.coursService.cours = value;
    }

    get courses(): Array<Cours> {
        return this.coursService.courses;
    }

    set courses(value: Array<Cours>) {
        this.coursService.courses = value;
    }

    get section(): Section {
        return this.sectionService.section;
    }

    set section(value: Section) {
        this.sectionService.section = value;
    }

    get chapitre(): Chapitre {
        return this.chapitreService.chapitre;
    }

    set chapitre(value: Chapitre) {
        this.chapitreService.chapitre = value;
    }

    get chapitres(): Array<Chapitre> {
        return this.chapitreService.chapitres;
    }

    set chapitres(value: Array<Chapitre>) {
        this.chapitreService.chapitres = value;
    }


    ngOnInit(): void {
        this.chapitreService.findAll().subscribe((data) => {

            data.forEach(chapitre => {
                if (chapitre.section.id == this.section.id) {
                    this.chapitres.push(chapitre);
                }

            });

        });


        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'cat_name', header: 'Name'},
            {field: 'cat_code', header: 'Code'}
        ];


    }


    setNewChapitre() {
        this.showCreatechapitreDialog = true;
        this.chapitre = new Chapitre();
    }


    onSelectChapitre(chapitre) {
        this.router.navigate(['/formateur/course', chapitre.id]);
    }


    onImageChange(event) {
        this.imageFile = event.target.files[0];


    }

    onVideoChange(event) {
        this.videoFile = event.target.files[0];

    }


    savechapitre() {

        console.log('here');
        console.log(this.imageFile);

        const formData = new FormData();

        if (this.imageFile != null) {
            if (this.imageFile.type.includes('image')) {
                formData.append('files', this.imageFile, this.imageFile.name);
                this.chapitre.urlImage = this.imageFile.name;
            }

        }


        if (this.videoFile != null) {
            if (this.videoFile.type.includes('video')) {
                formData.append('files', this.videoFile, this.videoFile.name);
                this.chapitre.urlVideo = this.videoFile.name;
            }

        }


        this.chapitreService.upload(formData).subscribe((response) => {

                this.messageService.add({
                    severity: 'info',
                    summary: 'Image uploaded successfully',
                    detail: 'Chapitre created',
                    life: 3000
                });
            },
            (error: HttpErrorResponse) => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Image not uploaded successfully',
                    detail: 'Chapitre created',
                    life: 3000
                });
            }
        );

        this.chapitre.section = this.section;
        console.log(this.chapitre);

        if (this.chapitre.id === 0) {
            this.showCreatechapitreDialog = false;
            this.chapitreService.save(this.chapitre).subscribe((data) => {
                this.chapitres.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'chapitre added',
                    life: 3000
                });
                this.chapitre = new Chapitre();
            }, error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'error',
                    detail: error?.error?.message,
                    life: 4000
                });
            });
        } else {
            this.showCreatechapitreDialog = false;
            this.chapitreService.save(this.chapitre).subscribe((data) => {
                for (let i = 0; i < this.chapitres.length; i++) {
                    if (data.id === this.chapitres[i].id) {
                        this.chapitres[i] = data;
                    }
                }
                this.messageService.add({
                    severity: 'info',
                    summary: 'Successful',
                    detail: 'Chapitre update',
                    life: 3000
                });
                this.chapitre = new Chapitre();
            }, error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'error',
                    detail: error?.error?.message,
                    life: 4000
                });
            });
        }
        window.location.reload();

    }


    public findBySectionId(id: number) {
        console.log(id);
        this.chapitreService.findBySectionId(id).subscribe((data) => {
            this.chapitres = data;
            console.log(data);
            if (data.length === 0) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'section orgisd chapitre ',
                    life: 3000
                });
            }
        }, error => {
            this.messageService.add({
                severity: 'error',
                summary: 'error',
                detail: error?.error?.message,
                life: 4000
            });
        });

    }

    public deleteById(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this chapitre ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.chapitreService.deleteById(id).subscribe((data) => {
                    for (let i = 0; i < this.chapitres.length; i++) {
                        if (id === this.chapitres[i].id) {
                            this.chapitres.splice(i, 1);
                        }
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Chapitre deleted ',
                        life: 3000
                    });
                }, error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'error',
                        detail: error?.error?.message,
                        life: 4000
                    });
                });
            }
        });
    }


    public updatechapitre(chapitre: Chapitre) {
        this.showCreatechapitreDialog = true;
        this.chapitre = chapitre;
    }


}
