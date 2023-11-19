// add-apprenant.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApprenantStorage } from '../models/apprenant-storage';
import { Apprenant } from '../models/apprenant.model';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.scss']
})
export class AddApprenantComponent implements OnInit {
  // Attributs
  photo = "";
  matricule = "";
  nom = "";
  prenom = "";
  email = "";
  numero = "";
  classe = "";
  classes: any;
  classesActives: any[] = [];

  // Constructeur
  constructor(private router: Router) {}

  // Initialisation
  ngOnInit(): void {
    this.classes = JSON.parse(localStorage.getItem('classes') || '[]');
    this.classes.forEach((element: any) => {
      if (element.etat == 'actif') {
        this.classesActives.push(element);
      }
    });
  }

  // Vérifier le formulaire et ajouter l'apprenant
  verifierFormAjout() {
    if (
      this.matricule != "" ||
      this.prenom != "" ||
      this.nom != "" ||
      this.email != "" ||
      this.numero != "" ||
      this.classe != ""
    ) {
      this.ajouterApprenant();
    } else {
      this.sweetMessage(
        "Désolé",
        "Veuillez renseigner tous les champs",
        "error"
      );
    }
  }

  // Ajouter un apprenant
  ajouterApprenant() {
    let apprenant;
    if (
      localStorage.getItem('apprenants') == null ||
      localStorage.getItem('apprenants') == undefined
    ) {
      apprenant = new Apprenant(
        this.matricule,
        this.nom,
        this.prenom,
        this.email,
        this.numero,
        this.classe,
        "passer",
        1,
        this.photo,
        'actif'
      );
      ApprenantStorage.setApprenants([apprenant]);
    } else {
      let listeApprenants = ApprenantStorage.getApprenants();
      let incrementedId =
        listeApprenants[listeApprenants.length - 1].id + 1;
      apprenant = new Apprenant(
        this.matricule,
        this.nom,
        this.prenom,
        this.email,
        this.numero,
        this.classe,
        "passer",
        incrementedId,
        this.photo,
        'actif'
      );
      listeApprenants.push(apprenant);
      ApprenantStorage.setApprenants(listeApprenants);
      // Réinitialisation du formulaire
      this.resetForm();
    }
    this.sweetMessage("Merci", "Insertion faite avec succès", "success");
    this.router.navigate(['admin/listApprenant']);
  }

  // Réinitialiser le formulaire
  resetForm() {
    this.matricule = "";
    this.photo = "";
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.numero = "";
    this.classe = "";
  }

  // Afficher un message SweetAlert
  sweetMessage(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
