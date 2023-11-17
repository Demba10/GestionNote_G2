import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardProfesseurComponent } from './dasboard-professeur.component';

describe('DasboardProfesseurComponent', () => {
  let component: DasboardProfesseurComponent;
  let fixture: ComponentFixture<DasboardProfesseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardProfesseurComponent]
    });
    fixture = TestBed.createComponent(DasboardProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
