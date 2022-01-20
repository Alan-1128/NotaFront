import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './components/agregar/agregar.component';
import { LoginComponent } from './components/login/login.component';
import { NotaComponent } from './components/nota/nota.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    LoginComponent,
    NotaComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    AgregarComponent,
    LoginComponent,
    NotaComponent
  ]
})
export class PageModule { }
