import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardProfesseurComponent } from './dasboard-professeur/dasboard-professeur.component';
import { ProgrammeEvaluationComponent } from './programme-evaluation/programme-evaluation.component';
import { ListeEvaluationComponent } from './liste-evaluation/liste-evaluation.component';
import { AttribuerNoteEvaluationComponent } from './attribuer-note-evaluation/attribuer-note-evaluation.component';

const routes: Routes = [
  { path: '', component: DasboardProfesseurComponent },
  { path: 'Programmer', component: ProgrammeEvaluationComponent },
  { path: 'liste-evaluations', component: ListeEvaluationComponent }, 
  { path: 'Attribuer-note', component: AttribuerNoteEvaluationComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
