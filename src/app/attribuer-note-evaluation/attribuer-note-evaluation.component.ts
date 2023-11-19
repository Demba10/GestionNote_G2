import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../models/apprenant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribuer-note-evaluation',
  templateUrl: './attribuer-note-evaluation.component.html',
  styleUrls: ['./attribuer-note-evaluation.component.scss']
})
export class AttribuerNoteEvaluationComponent implements OnInit {
  listeEvaluation: any[] = [];
  apprenants: Apprenant[] = [];
  listeApprenants: Apprenant[] = [];
  selectedEvaluationId: number = -1; // Utilisation d'une valeur par défaut
  notes: { apprenant: Apprenant, note: number }[] = [];
  filteredApprenants: Apprenant[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.listeEvaluation = JSON.parse(localStorage.getItem("Eval") || '[]');
    this.listeApprenants = JSON.parse(localStorage.getItem('apprenants') || '[]');
  }

  onSelectEvaluation() {
    if (this.selectedEvaluationId !== -1) {
      this.notes = this.listeApprenants
        .filter(apprenant => apprenant.evaluationId === this.selectedEvaluationId)
        .map(apprenant => ({ apprenant, note: 0 })); // Initialisez les notes à 0
    } else {
      console.error('selectedEvaluationId est -1. Impossible de filtrer les apprenants.');
    }
  }

  attribuerNotes() {
    // Logique pour attribuer les notes
    console.log('Attribution des notes :', this.filteredApprenants);
    // Vous pouvez maintenant faire ce que vous voulez avec les notes attribuées
    // Par exemple, les envoyer à un service ou les stocker localement, etc.
  }
}
