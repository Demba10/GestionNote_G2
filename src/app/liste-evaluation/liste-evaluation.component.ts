import { Component,OnInit } from '@angular/core';
import { EVALUATION } from '../models/models';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-liste-evaluation',
  templateUrl: './liste-evaluation.component.html',
  styleUrls: ['./liste-evaluation.component.scss']
})
export class ListeEvaluationComponent implements OnInit {

  // attributs
  
  anneeAcademic:string ="";
  semestre:string="";
  classe :string="";
  date="";
  matiere :string="";
  type :string="";
  
  // pour les etat d'evaluations
  etat:number=1;

  // pour la modification d'une evaluation
  saveTable!: any[];
  modifierEvaluation: boolean = false;

// pour récuperer les evaluations programmées
listeEvaluation:any[]=[];

 

   // pour vider les champs
   viderChamps() {
        
    this.anneeAcademic ="";
    this.semestre="";
    this.classe ="";
    this.date="";
    this.matiere ="";
    this.type ="";
    }

      // Méthode pour afficher un sweetalert2 apres vérification 
  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

ngOnInit() {
  // recup notre table au niveau du localstorage
  this.listeEvaluation = JSON.parse(localStorage.getItem("Eval") || '[]');
  
}


  // Methode pour modifier une evaluation
  evaluationModifiee(param: number){
    this.listeEvaluation.forEach(element => {
      if (element.idEvaluation == param) {
        this.saveTable = this.listeEvaluation.filter((ele) => ele.idEvaluation == param);
        this.modifierEvaluation = !this.modifierEvaluation;
      }
    });
    
    // On met à jour le tableau qui est stocké dans le localStorage 
    localStorage.setItem("eval", JSON.stringify(this.tabEvaluation));
    // this.verifierChamps("Mofication réussie!", "", "success"); 
    this.viderChamps();
  } 

  retour() {
    this.modifierEvaluation = !this.modifierEvaluation;
  }

  tabEvaluation(tabEvaluation: any): string {
    throw new Error('Method not implemented.');
  }


// pour archiver une evaluation

ArchiverEvaluation(paramArchive:any){

  this.listeEvaluation.forEach(element => {
    if (element.idEvaluation == paramArchive) {
      this.saveTable = this.listeEvaluation.filter((ele) => ele.idEvaluation == paramArchive);
    }
  });

  Swal.fire({
    title: "Etes-vous sur???",
    text: "Vous allez supprimer le contact",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, je supprime!"
  }).then((result) => {
    if (result.isConfirmed) {
      paramArchive.etatContact = 0;
      // On met à jour le tableau qui est stocké dans le localStorage 
      localStorage.setItem("eval", JSON.stringify(this.tabEvaluation));
      this.verifierChamps("Evaluaation Archivée!", "", "success");     
      
    }
  });
  // alert(paramContact.etatContact);
  
}


}
