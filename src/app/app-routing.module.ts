import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardProfesseurComponent } from './dasboard-professeur/dasboard-professeur.component';
import { ProgrammeEvaluationComponent } from './programme-evaluation/programme-evaluation.component';
import { ListeEvaluationComponent } from './liste-evaluation/liste-evaluation.component';

const routes: Routes = [
  // route par defaut
    {path: '' , component: DasboardProfesseurComponent},

    // Route qui mène vers Programmer une evaluation

    {path: 'Programmer' , component: ProgrammeEvaluationComponent},
    // Route qui mène vers liste evaluation
    {path: 'listeEvaluation' , component: ListeEvaluationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
