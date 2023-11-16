import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClasseComponent } from './add-classe.component';

describe('AddClasseComponent', () => {
  let component: AddClasseComponent;
  let fixture: ComponentFixture<AddClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClasseComponent]
    });
    fixture = TestBed.createComponent(AddClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});