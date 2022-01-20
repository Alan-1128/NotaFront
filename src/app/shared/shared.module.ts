import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SweetAlert2Module,
    MaterialModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
