import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardProfesseurComponent } from './dasboard-professeur/dasboard-professeur.component';
import { FormsModule } from '@angular/forms';
import { ProgrammeEvaluationComponent } from './programme-evaluation/programme-evaluation.component';
import { AttribuerNoteEvaluationComponent } from './attribuer-note-evaluation/attribuer-note-evaluation.component';
import { ListeEvaluationComponent } from './liste-evaluation/liste-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardProfesseurComponent,
    ProgrammeEvaluationComponent,
    AttribuerNoteEvaluationComponent,
    ListeEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
