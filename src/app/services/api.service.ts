import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8080/api/nota/'
  urlComentario = 'http://localhost:8080/api/comentario/'
  urlRespuesta = 'http://localhost:8080/api/respuesta/'
  
  numero:number = 0;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http:HttpClient, private router:Router, private usu:UsuariosService) { }

  private agregarAuthorizationHeader(){
    let token = this.usu.token;
    if(token != null){
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNoAutorizado(e:any){
    if(e.status==401){
      this.router.navigate(['/logging'])
      return true
    }

    if(e.status==403){
      Swal.fire({
        title: 'No estas autenticado',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      this.router.navigate(['/inicio'])
      return true
    }
    return false
  }

  obtenerDatos(dato:any){
    return this.http.get(`${this.url}${dato}`)
  }

  agregarNota(body: any): Observable<any>{
    return this.http.post(this.url, body, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError((e:any) => {
        if(this.isNoAutorizado(e)){
          return throwError(() => e); 
        }

        return throwError(() => e); 

      })
    )
  }

  agregarComentario(dato:number, body: any){
    return this.http.post(`${this.urlComentario}${dato}`, body, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError((e:any) => {
        if(this.isNoAutorizado(e)){
          return throwError(() => e); 

        }

        return throwError(() => e); 

      })
    )
  }

  agregarRespuesta(dato:number, body: any){
    return this.http.post(`${this.urlRespuesta}${dato}`, body, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError((e:any) => {
        if(this.isNoAutorizado(e)){
          return throwError(() => e); 

        }

        return throwError(() => e); 

      })
    )
  }

  obtenerId(id:number){
    this.numero = id

  }

}
