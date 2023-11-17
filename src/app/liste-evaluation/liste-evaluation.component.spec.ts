import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEvaluationComponent } from './liste-evaluation.component';

describe('ListeEvaluationComponent', () => {
  let component: ListeEvaluationComponent;
  let fixture: ComponentFixture<ListeEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEvaluationComponent]
    });
    fixture = TestBed.createComponent(ListeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
