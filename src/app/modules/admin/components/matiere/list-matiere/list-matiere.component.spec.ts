import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatiereComponent } from './list-matiere.component';

describe('ListMatiereComponent', () => {
  let component: ListMatiereComponent;
  let fixture: ComponentFixture<ListMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMatiereComponent]
    });
    fixture = TestBed.createComponent(ListMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
