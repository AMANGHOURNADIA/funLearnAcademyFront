import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChapitreComponent } from './manage-chapitre.component';

describe('ManageChapitreComponent', () => {
  let component: ManageChapitreComponent;
  let fixture: ComponentFixture<ManageChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageChapitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
