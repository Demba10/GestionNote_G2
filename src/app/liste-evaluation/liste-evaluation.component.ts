import { Component,OnInit } from '@angular/core';
import { EVALUATION } from '../models/models';




@Component({
  selector: 'app-liste-evaluation',
  templateUrl: './liste-evaluation.component.html',
  styleUrls: ['./liste-evaluation.component.scss']
})
export class ListeEvaluationComponent implements OnInit {

  // pour les etat d'evaluations
  etat:number=1;

// pour récuperer les evaluations programmées
listeEvaluation:any[]=[];

ngOnInit() {
  this.listeEvaluation = JSON.parse(localStorage.getItem("Eval") || '[]');
  
}

// changeEtat(){
//   if (etat==1) {
    
    
//   }
// }

}
