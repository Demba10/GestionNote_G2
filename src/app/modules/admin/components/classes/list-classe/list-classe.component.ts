import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.scss']
})
export class ListClasseComponent implements OnInit {
  classes:any;
  ngOnInit(): void {
    this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
  }
  constructor(private router: Router) { }
  routerRedirect() {
    this.router.navigate(['admin/addClasse'])
  }
  activeDesactive(faire:any,id:number){
    if (faire=="activer") {
      // alert('activer')
      this.classes.forEach((element:any) => {
        if (element.id==id) {
          element.etat="actif";
        }
      });
      localStorage.setItem('classes',JSON.stringify(this.classes));
    }else if(faire=="desactiver"){
      this.classes.forEach((element:any) => {
        if (element.id==id) {
          element.etat="desactif";
        }
      });
      localStorage.setItem('classes',JSON.stringify(this.classes));
      // this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
      // alert('desactiver')
    }
  }
}
