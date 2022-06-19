import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../../controller/service/cours.service';
import {MessageService} from 'primeng/api';
import {SectionService} from '../../../controller/service/section.service';
import {Chapitre} from '../../../controller/model/chapitre.model';
import {ChapitreService} from '../../../controller/service/chapitre.service';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {Section} from '../../../controller/model/section.true';

@Component({
  selector: 'app-manage-chapitre',
  templateUrl: './manage-chapitre.component.html',
  styleUrls: ['./manage-chapitre.component.scss']
})
export class ManageChapitreComponent implements OnInit {
  sections: Section[];
  section: Array<Section> = new Array<Section>();

  constructor(private courseService: CoursService, private sectionService: SectionService,
              private authService: AuthenticationService,
              private messageService: MessageService,
              private chapitreService: ChapitreService) { }
  ngOnInit(): void {
    this.sectionService.findAll().subscribe(data => this.sections = data);
    console.log(this.chapitre);
  }
  get showCreateChapitreDialog(): boolean {
    return this.courseService.showCreateChapDialog;
  }

  set showCreateChapitreDialog(value: boolean) {
    this.courseService.showCreateChapDialog = value;
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
}
