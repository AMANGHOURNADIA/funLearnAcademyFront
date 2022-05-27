import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../../controller/model/categorie.model';
import {CategorieService} from '../../../controller/service/categorie.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CategorieItemService} from '../../../controller/service/categorie-item.service';
import {SujetService} from '../../../controller/service/sujet.service';
import {CategorieItem} from '../../../controller/model/categorie-item.true';
import {Sujet} from '../../../controller/model/sujet.true';
import {Cours} from '../../../controller/model/cours.model';
import {CoursService} from '../../../controller/service/cours.service';
import {SectionService} from '../../../controller/service/section.service';
import {Chapitre} from '../../../controller/model/chapitre.model';
import {ChapitreService} from '../../../controller/service/chapitre.service';
import {Section} from '../../../controller/model/section.true';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {

  cols: any[];
  couchedTd = null;
  selectedcours: Cours = new Cours();
  showCreatecoursDialog: boolean;
  showCreatesectionDialog: boolean;
  showCreatechapitreDialog: boolean;


  constructor(private coursService: CoursService,
              private confirmationService: ConfirmationService,
              private sectionService: SectionService,
              private chapitreService: ChapitreService,
              private messageService: MessageService) {
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

  get sections(): Array<Section> {
    return this.sectionService.sections;
  }

  set sections(value: Array<Section>) {
    this.sectionService.sections = value;
  }
  ngOnInit(): void {
    this.coursService.findAll().subscribe((data) => {
      this.courses = data;
      console.log(data);
    });
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'cat_name', header: 'Name'},
      {field: 'cat_code', header: 'Code'}
    ];
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
    console.log(this.cours);
    if (this.cours.id === 0) {
      this.showCreatecoursDialog = false;
      this.coursService.save(this.cours).subscribe((data) => {
        this.courses.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cours added',
          life: 3000
        });
        this.cours = new Cours();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
    } else {
      this.showCreatecoursDialog = false;
      this.coursService.save(this.cours).subscribe((data) => {
        for (let i = 0; i < this.courses.length; i++) {
          if (data.id === this.courses[i].id) {
            this.courses[i] = data;
          }
        }
        this.messageService.add({
          severity: 'info',
          summary: 'Successful',
          detail: 'Cours update',
          life: 3000
        });
        this.cours = new Cours();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
    }

  }
  public deleteCours(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this cours ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.coursService.delete(id).subscribe((data) => {
          for (let i = 0; i < this.courses.length; i++) {
            if (id === this.courses[i].id) {
              this.courses.splice(i, 1);
            }
          }
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Cours deleted ',
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
  public findByCoursId(id: number) {
    this.sectionService.findByCoursId(id).subscribe((data) => {
      this.sections = data;
      if (data.length === 0) {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cours orgisd sections ',
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

  saveSection() {
    console.log(this.section);
    if (this.section.id === 0) {
      this.showCreatesectionDialog = false;
      this.sectionService.save(this.section).subscribe((data) => {
        this.sections.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'section added',
          life: 3000
        });
        this.section = new Section();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
    } else {
      this.showCreatesectionDialog = false;
      this.sectionService.save(this.section).subscribe((data) => {
        for (let i = 0; i < this.sections.length; i++) {
          if (data.id === this.sections[i].id) {
            this.sections[i] = data;
          }
        }
        this.messageService.add({
          severity: 'info',
          summary: 'Successful',
          detail: 'section update',
          life: 3000
        });
        this.section = new Section();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: error?.error?.message,
          life: 4000
        });
      });
    }

  }
  public deleteSection(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this section ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.sectionService.deleteSection(id).subscribe((data) => {
          for (let i = 0; i < this.sections.length; i++) {
            if (id === this.sections[i].id) {
              this.sections.splice(i, 1);
            }
          }
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'section deleted ',
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
  updateCours(cours: Cours) {
    this.showCreatecoursDialog = true;
    this.cours = cours;
  }

  updatesection(section: Section) {
    this.showCreatesectionDialog = true;
    this.section = section;
  }

  savechapitre() {
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
