import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Section} from '../../../controller/model/section.model';
import {SectionService} from '../../../controller/service/section.service';
import {Chapitre} from '../../../controller/model/chapitre.model';
import {ChapitreService} from '../../../controller/service/chapitre.service';
import {Formateur} from '../../../controller/model/formateur.model';
import {FormateurService} from '../../../controller/service/formateur.service';
import {Sujet} from '../../../controller/model/sujet.model';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {SujetService} from '../../../controller/service/sujet.service';

@Component({
  selector: 'app-manage-chapitre',
  templateUrl: './manage-chapitre.component.html',
  styleUrls: ['./manage-chapitre.component.scss']
})
export class ManageChapitreComponent implements OnInit {
  sections: Section[];
  section: Array<Section> = new Array<Section>();
  imageFile: File = null;
  videoFile: File = null;

  constructor(private courseService: CoursService, private sectionService: SectionService,
              private authService: AuthenticationService,
              private messageService: MessageService,
              private chapitreService: ChapitreService) { }
  ngOnInit(): void {
    this.sectionService.findAll().subscribe(data => this.sections = data);
    console.log(this.chapitre);
  }
  get showCreateChapitreDialog(): boolean {
    return this.courseService.showCreateChapitreDialog;
  }

  set showCreateChapitreDialog(value: boolean) {
    this.courseService.showCreateChapitreDialog = value;
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
  save() {
    this.chapitre.formateur = this.authService.getFormateurFromLocalCache();
    this.chapitreService.save(this.chapitre).subscribe(
        data => {
          this.chapitres.push({...data});
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'chapter added',
            life: 3000
          });
          this.showCreateChapitreDialog = false;
          this.chapitre = new Chapitre();
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
  onImageChange(event) {
    this.imageFile = event.target.files[0];



  }
  onVideoChange(event) {
    this.videoFile = event.target.files[0];

  }
}
