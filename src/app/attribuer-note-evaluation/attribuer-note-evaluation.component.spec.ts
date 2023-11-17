import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribuerNoteEvaluationComponent } from './attribuer-note-evaluation.component';

describe('AttribuerNoteEvaluationComponent', () => {
  let component: AttribuerNoteEvaluationComponent;
  let fixture: ComponentFixture<AttribuerNoteEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttribuerNoteEvaluationComponent]
    });
    fixture = TestBed.createComponent(AttribuerNoteEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
