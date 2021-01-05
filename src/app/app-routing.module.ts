import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacListComponent } from './components/contactoGrupo/contac-list/contac-list.component';
import { InicioComponent } from './components/Inicio/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'Contacto', component: ContacListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
