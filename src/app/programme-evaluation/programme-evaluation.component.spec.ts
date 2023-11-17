import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEvaluationComponent } from './programme-evaluation.component';

describe('ProgrammeEvaluationComponent', () => {
  let component: ProgrammeEvaluationComponent;
  let fixture: ComponentFixture<ProgrammeEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeEvaluationComponent]
    });
    fixture = TestBed.createComponent(ProgrammeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
