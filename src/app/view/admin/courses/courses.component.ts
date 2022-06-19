import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../../controller/service/cours.service';
import {Cours} from '../../../controller/model/cours.model';
import {CategorieService} from '../../../controller/service/categorie.service';
import {Categorie} from '../../../controller/model/categorie.model';
import {CategorieItem} from '../../../controller/model/categorie-item.model';
import {Sujet} from '../../../controller/model/sujet.model';
import {CategorieItemService} from '../../../controller/service/categorie-item.service';
import {SujetService} from '../../../controller/service/sujet.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    courses: Cours[];
    categories: Array<Categorie> = new Array<Categorie>();
    categoriesItems: Array<CategorieItem> = new Array<CategorieItem>();
    sujets: Array<Sujet> = new Array<Sujet>();
    selectedCategory: Categorie = new Categorie();
    selectedSujet: Sujet = new Sujet();
    selectedcategoriesItem: CategorieItem = new CategorieItem();

    constructor(private coursService: CoursService,
                private categoriesItemService: CategorieItemService,
                private sujetService: SujetService,
                private categoryService: CategorieService) {
    }

    ngOnInit(): void {
        this.coursService.findAll().subscribe(data => {
            this.courses = data;
            console.log(data);
        });

        this.categoryService.findAll().subscribe(data => this.categories = data);
        this.categoriesItemService.findAll().subscribe(data => this.categoriesItems = data);
        this.sujetService.findAll().subscribe(data => this.sujets = data);

    }

    getCategoryItems() {
        this.categoriesItemService.findAll().subscribe(data => {
            this.categoriesItems = data.filter(c => c.categorie.id === this.selectedCategory.id);
        });
    }

    getsujets() {
        this.sujetService.findAll().subscribe(data => {
            this.sujets = data.filter(c => c.categorieItem.id === this.selectedcategoriesItem.id);
        });
    }

    getCourses() {
        this.coursService.findAll().subscribe(data => {
            this.courses = data.filter(c => c.sujet.id === this.selectedSujet.id);
        });
    }

}
