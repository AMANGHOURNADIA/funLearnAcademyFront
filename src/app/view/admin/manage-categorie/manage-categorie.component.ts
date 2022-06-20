import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../../../controller/service/categorie.service';
import {Categorie} from '../../../controller/model/categorie.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CategorieItem} from '../../../controller/model/categorie-item.true';
import {CategorieItemService} from '../../../controller/service/categorie-item.service';
import {SujetService} from '../../../controller/service/sujet.service';
import {Sujet} from '../../../controller/model/sujet.true';

@Component({
    selector: 'app-manage-categorie',
    templateUrl: './manage-categorie.component.html',
    styleUrls: ['./manage-categorie.component.scss']
})
export class ManageCategorieComponent implements OnInit {
    cols: any[];
    couchedTd = null;
    selectedcategorie: Categorie = new Categorie();
    showCreatecategorieDialog: boolean;
    showCreatecategorieItemDialog: boolean;
    showCreatesujetDialog: boolean;
    showUpdategorieDialog: boolean;

    constructor(private categorieService: CategorieService,
                private confirmationService: ConfirmationService,
                private categoryItemService: CategorieItemService,
                private sujetService: SujetService,
                private messageService: MessageService) {
    }


    get categorie(): Categorie {
        return this.categorieService.categorie;
    }

    set categorie(value: Categorie) {
        this.categorieService.categorie = value;
    }

    get categories(): Array<Categorie> {
        return this.categorieService.categories;
    }

    set categories(value: Array<Categorie>) {
        this.categorieService.categories = value;
    }


    get categoryItem(): CategorieItem {
        return this.categoryItemService.categoryItem;
    }

    set categoryItem(value: CategorieItem) {
        this.categoryItemService.categoryItem = value;
    }

    get categoryItems(): Array<CategorieItem> {
        return this.categoryItemService.categoryItems;
    }

    set categoryItems(value: Array<CategorieItem>) {
        this.categoryItemService.categoryItems = value;
    }

    get sujet(): Sujet {
        return this.sujetService.sujet;
    }

    set sujet(value: Sujet) {
        this.sujetService.sujet = value;
    }

    get sujets(): Array<Sujet> {
        return this.sujetService.sujets;
    }

    set sujets(value: Array<Sujet>) {
        this.sujetService.sujets = value;
    }

    ngOnInit(): void {
        this.categorieService.findAll().subscribe((data) => {
            this.categories = data;
            console.log(data);
        });
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'cat_name', header: 'Name'},
            {field: 'cat_code', header: 'Code'}
        ];
    }


    save() {
        console.log(this.categorie);
        if (this.categorie.id === 0) {
            this.showCreatecategorieDialog = false;
            this.categorieService.save(this.categorie).subscribe((data) => {
                this.categories.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Category added',
                    life: 3000
                });
                this.categorie = new Categorie();
            }, error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'error',
                    detail: error?.error?.message,
                    life: 4000
                });
            });
        } else {
            this.showCreatecategorieDialog = false;
            this.categorieService.save(this.categorie).subscribe((data) => {
                for (let i = 0; i < this.categories.length; i++) {
                    if (data.id === this.categories[i].id) {
                        this.categories[i] = data;
                    }
                }
                this.messageService.add({
                    severity: 'info',
                    summary: 'Successful',
                    detail: 'Category update',
                    life: 3000
                });
                this.categorie = new Categorie();
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

    saveCategoryItem() {
        console.log(this.categoryItem);
        if (this.categoryItem.id === 0) {
            this.showCreatecategorieItemDialog = false;
            this.categoryItemService.save(this.categoryItem).subscribe((data) => {
                this.categoryItems.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Category added',
                    life: 3000
                });
                this.categoryItem = new CategorieItem();
            }, error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'error',
                    detail: error?.error?.message,
                    life: 4000
                });
            });
        } else {
            this.showCreatecategorieItemDialog = false;
            this.categoryItemService.save(this.categoryItem).subscribe((data) => {
                for (let i = 0; i < this.categoryItems.length; i++) {
                    if (data.id === this.categoryItems[i].id) {
                        this.categoryItems[i] = data;
                    }
                }
                this.messageService.add({
                    severity: 'info',
                    summary: 'Successful',
                    detail: 'CategoryItem update',
                    life: 3000
                });
                this.categoryItem = new CategorieItem();
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

    saveSujet() {
        console.log(this.sujet);
        if (this.sujet.id === 0) {
            this.showCreatesujetDialog = false;
            this.sujetService.save(this.sujet).subscribe((data) => {
                this.sujets.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'sujet added',
                    life: 3000
                });
                this.sujet = new Sujet();
            }, error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'error',
                    detail: error?.error?.message,
                    life: 4000
                });
            });
        } else {
            this.showCreatesujetDialog = false;
            this.sujetService.save(this.sujet).subscribe((data) => {
                for (let i = 0; i < this.sujets.length; i++) {
                    if (data.id === this.sujets[i].id) {
                        this.sujets[i] = data;
                    }
                }
                this.messageService.add({
                    severity: 'info',
                    summary: 'Successful',
                    detail: 'Sujet update',
                    life: 3000
                });
                this.sujet = new Sujet();
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

    public findByCategoryId(id: number) {
        this.categoryItemService.findByCategoryId(id).subscribe((data) => {
            this.categoryItems = data;
            if (data.length === 0) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Category is empty ',
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

    public findByCategoryItemId(id: number) {
        console.log(id);
        this.sujetService.findByCategoryItemId(id).subscribe((data) => {
            this.sujets = data;
            console.log(data);
            if (data.length === 0) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'CategoryItem is empty',
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
            message: 'Are you sure you want to delete this sujet ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.sujetService.deleteById(id).subscribe((data) => {
                    for (let i = 0; i < this.sujets.length; i++) {
                        if (id === this.sujets[i].id) {
                            this.sujets.splice(i, 1);
                        }
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CategoryItem deleted ',
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

    public deleteCategory(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this.category ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.categorieService.delete(id).subscribe((data) => {
                    for (let i = 0; i < this.categories.length; i++) {
                        if (id === this.categories[i].id) {
                            this.categories.splice(i, 1);
                        }
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CategoryItem deleted ',
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

    public deleteCategoryItem(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this categoryItem ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.categoryItemService.deleteCategoryItem(id).subscribe((data) => {
                    for (let i = 0; i < this.categories.length; i++) {
                        if (id === this.categoryItems[i].id) {
                            this.categoryItems.splice(i, 1);
                        }
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CategoryItem deleted ',
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

    updateCategory(categorie: Categorie) {
        this.showCreatecategorieDialog = true;
        this.categorie = categorie;
    }

    updatecategoryItem(categoryItem: CategorieItem) {
        this.showCreatecategorieItemDialog = true;
        this.categoryItem = categoryItem;
    }

    updatsujet(sujet: Sujet) {
        this.showCreatesujetDialog = true;
        this.sujet = sujet;
    }
}
