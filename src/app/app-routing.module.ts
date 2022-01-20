import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './page/components/agregar/agregar.component';
import { LoginComponent } from './page/components/login/login.component';
import { NotaComponent } from './page/components/nota/nota.component';

const routes: Routes = [
  {
    path:'inicio',
    component:HomeComponent
  },
  {
    path:'agregar',
    component:AgregarComponent
  },
  {
    path:'nota/:id',
    component:NotaComponent
  },

  {
    path:'logging',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
