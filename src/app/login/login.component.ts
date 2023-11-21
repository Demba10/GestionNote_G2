import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Attributs
  email="";
  pass="";

  // Methodes
  constructor(private router:Router){

  }
  connexion(){
    if (this.email=="" || this.pass=="") {
      Swal.fire({
        title: "Désolé",
        text: "Veuillez renseigner tous les champs",
        icon: "error"
      });
    }else if(this.email!="admin@gmail.com" || this.pass!="passer"){
      Swal.fire({
        title: "Désolé",
        text: "Vérifier la saisie",
        icon: "error"
      });
    }else{
      this.router.navigate(['admin']);
      Swal.fire({
        title: "Bienvenue",
        text: "Connexion faite avec succes",
        icon: "success"
      });
    }
  }
}
