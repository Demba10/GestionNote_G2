// liste-evaluation.component.ts

import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-evaluation',
  templateUrl: './liste-evaluation.component.html',
  styleUrls: ['./liste-evaluation.component.scss'],
})
export class ListeEvaluationComponent {
  //  pour switch les deux formulaire
 showForm1: boolean = true;

  onSubmitForm1() {
    // Logique de traitement pour le formulaire 1
    console.log('Formulaire 1 soumis');
  }

  onSubmitForm2() {
    // Logique de traitement pour le formulaire 2
    console.log('Formulaire 2 soumis');
  }

  toggleForms() {
    // Inverser la valeur de showForm1 lorsqu'on clique sur le bouton enregistrer
    this.showForm1 = false;
}
  evaluations: any[] = [];

  matiere: string = '';
  classe: string = '';
  date: string = '';
  type: string = '';
  etat: string = '';

  // ... autres méthodes

  ajouterEvaluation(): void {
    if (this.sontChampsRenseignes()) {
      const nouvelleEvaluation = {
        matiere: this.matiere,
        classe: this.classe,
        date: this.date,
        type: this.type,
        etat: this.etat,
      };

      this.evaluations.push(nouvelleEvaluation);

      // Réinitialiser les champs après l'ajout
      this.matiere = '';
      this.classe = '';
      this.date = '';
      this.type = '';
      this.etat = '';
        this.showSuccessAlert();
    } else {
      this.showChampsNonRenseignesAlert();
    }
  }

  sauvegarderListe(): void {
    if (this.evaluations.length > 0) {
      localStorage.setItem('listeEvaluation', JSON.stringify(this.evaluations));
      this.showSuccessAlert();
    } else {
      this.showErrorAlert();
    }
  }

  sontChampsRenseignes(): any {
    // Vérifier si tous les champs nécessaires sont renseignés
    return this.matiere && this.classe && this.date && this.type && this.etat;
  }

  showSuccessAlert(): void {
    Swal.fire({
      title: 'Succès',
      text: 'Les évaluations ont été sauvegardées avec succès',
      icon: 'success',
    });
  }

  showErrorAlert(): void {
    Swal.fire({
      title: 'Erreur',
      text: 'Veuillez ajouter au moins une évaluation',
      icon: 'error',
    });
  }

  showChampsNonRenseignesAlert(): void {
    Swal.fire({
      title: 'Erreur',
      text: 'Veuillez renseigner tous les champs',
      icon: 'error',
    });
  }

}
  // ... autres méthodes

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-liste-evaluation',
//   templateUrl: './liste-evaluation.component.html',
//   styleUrls: ['./liste-evaluation.component.scss']
// })
// export class ListeEvaluationComponent  {
// evaluations: any[] = [];

//   ngOnInit(): void {
//     const storedListeEvaluation = localStorage.getItem('listeEvaluation');
//     if (storedListeEvaluation) {
//       this.evaluations = JSON.parse(storedListeEvaluation);
//     }
//   }

//   // ... autres méthodes
//   // pour switch les deux formulaire
//  showForm1: boolean = true;

//   onSubmitForm1() {
//     // Logique de traitement pour le formulaire 1
//     console.log('Formulaire 1 soumis');
//   }

//   onSubmitForm2() {
//     // Logique de traitement pour le formulaire 2
//     console.log('Formulaire 2 soumis');
//   }

//   toggleForms() {
//     // Inverser la valeur de showForm1 lorsqu'on clique sur le bouton enregistrer
//     this.showForm1 = false;
//   }

// }
