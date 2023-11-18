// ... autres imports
import { Component } from '@angular/core';
import { Apprenant } from '../models/apprenant.model'; //  importation du modèle d'apprenant

@Component({
  selector: 'app-attribuer-note-evaluation',
  templateUrl: './attribuer-note-evaluation.component.html',
  styleUrls: ['./attribuer-note-evaluation.component.scss']
})
export class AttribuerNoteEvaluationComponent {
  evaluations = ['evaluation1', 'evaluation2', 'evaluation3'];
  selectedEvaluation: string = "";
  note1: number | undefined;

  // Ajoutez une liste d'apprenants pour chaque évaluation
  apprenantsParEvaluation: { [key: string]: Apprenant[] } = {
    'evaluation1': [
      { nom: 'Apprenant 1', note: undefined },
      { nom: 'Apprenant 2', note: undefined },
     
    ],
    'evaluation2': [
      { nom: 'Apprenant 3', note: undefined },
      { nom: 'Apprenant 4', note: undefined },
     
    ],
    'evaluation3': [
      { nom: 'Apprenant 5', note: undefined },
      { nom: 'Apprenant 6', note: undefined },
     
    ],
  };

  // ...

  // Méthode pour attribuer les notes
  attribuerNotes() {
    // Récupérez la liste des apprenants en fonction de l'évaluation sélectionnée
    const apprenants = this.apprenantsParEvaluation[this.selectedEvaluation];

    // Attribuez les notes aux apprenants
    apprenants.forEach(apprenant => {
      apprenant.note = this.note1;
    });

    // Vous pouvez maintenant faire ce que vous voulez avec les notes attribuées
    console.log('Notes attribuées :', apprenants);
  }
}
