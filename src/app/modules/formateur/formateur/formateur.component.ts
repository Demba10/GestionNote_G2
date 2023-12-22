import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {

  professeur!: any[];
  userAuth!: any;

  ngOnInit(): void {
    this.professeur = JSON.parse(localStorage.getItem('professeurs') || '[]');
    this.professeur.forEach(element => {
      if (element.isAuth == true) {
        this.userAuth = element.prenom + ' ' + element.nom;
      }
    });
  }
}
