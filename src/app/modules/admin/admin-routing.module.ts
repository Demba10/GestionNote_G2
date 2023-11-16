import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { AddApprenantComponent } from './components/apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './components/apprenants/list-apprenant/list-apprenant.component';
import { DetailsApprenantComponent } from './components/apprenants/details-apprenant/details-apprenant.component';
import { LoginComponent } from 'src/app/login/login.component';
import { EditApprenantComponent } from './components/apprenants/edit-apprenant/edit-apprenant.component';
import { AddClasseComponent } from './components/classes/add-classe/add-classe.component';
import { ListClasseComponent } from './components/classes/list-classe/list-classe.component';
import { DetailsClasseComponent } from './components/classes/details-classe/details-classe.component';
import { EditClasseComponent } from './components/classes/edit-classe/edit-classe.component';

const routes: Routes = [
  {
    path:'',component:AdministrateurComponent,children:[
      {
        path:'addApprenant',component:AddApprenantComponent
      },
      {
        path:'listApprenant',component:ListApprenantComponent
      },
      {
        path:'detailsApprenant',component:DetailsApprenantComponent
      },
      {
        path:'modifierApprenant/:id',component:EditApprenantComponent
      },
      {
        path:'addClasse',component:AddClasseComponent
      },
      {
        path:'listClasse',component:ListClasseComponent
      },
      {
        path:'detailsClasse',component:DetailsClasseComponent
      },
      {
        path:'modifierClasse/:id',component:EditClasseComponent
      }

    ]
  },
  {
    path:'login',component:LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
