import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprenant } from 'src/app/models/apprenant';
import { Notes } from 'src/app/models/notes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  listeEvaluation: any[] = [];
  apprenants: Apprenant[] = [];
  listeApprenants!: any[];
  selectedEvaluationId: number = -1; // Utilisation d'une valeur par défaut
  notes!: any[];
  filteredApprenants: Apprenant[] = [];
  lesnotes!: Notes[];
  note!: number;
  eval: string = ''
  idEvalCurrent: number = 0;
  classeCurrent: any;
  newList!: any[];
  noteApp!: any[];
  currentNote!: any;
  idAN!: any
  nameAN!: any;
  baseText!: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.listeEvaluation = JSON.parse(localStorage.getItem("Eval") || '[]');
    this.newList = JSON.parse(localStorage.getItem('apprenants') || '[]');
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]');
    this.listeApprenants = JSON.parse(localStorage.getItem('newusers') || '[]') 
  }

  onSelectEvaluation() {
    this.classeCurrent = this.listeEvaluation[this.idEvalCurrent - 1].classe;
    this.listeApprenants = this.newList.filter(el => el.classe == this.classeCurrent)
    localStorage.setItem('newusers', JSON.stringify(this.listeApprenants))
  }

  attribuerNotes() {

    if (this.note > 20 || this.note < 0) {
      Swal.fire({
        title: 'error',
        text: 'La note doit etre compris entre 0 et 20',
        icon: 'error'
      })
    } else {
      const nt = new Notes(this.notes.length, this.note, this.idAN)
      this.notes.push(nt);
      localStorage.setItem('notes', JSON.stringify(this.notes))
      Swal.fire({
        title: 'success',
        text: 'Note ajouter avec succes',
        icon: 'success'
      })
    }
  }

  itemAN(param: any) {
    this.listeApprenants.forEach(element => {
      if (element.id == param) {
        this.idAN = param;
        this.nameAN = element.prenom + " " + element.nom;
        this.baseText = "Atrribution de note a ";
      }
    });
  }

  supAN(param: number) {
    this.notes.forEach(element => {
      if (element.id == param) {
        element.note = -1;
      }
    });
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  modAN(param: any) {
    this.notes.forEach(element => {
      if (element.id == param) {
        alert(param)
        this.idAN = param;
        this.nameAN = element.prenom + " " + element.nom;
        this.baseText = "Modification du note de "
          element.note = this.note;
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    });
  }
}