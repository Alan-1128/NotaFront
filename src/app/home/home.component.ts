import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  apiCompleta:any = [];
  apiSubscription!: Subscription;

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    
    this.apiSubscription = this.apiService.obtenerDatos('').subscribe((data:any) => {
      this.apiCompleta = data
    });
    
  }

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }

  enviarId(id:number){
    this.apiService.obtenerId(id)
    this.router.navigate(['/nota', id]);
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }

}
