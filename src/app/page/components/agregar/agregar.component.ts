import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private fb:FormBuilder, private apiService:ApiService, private router:Router) { }

  datosFormulario:any;
  notaAgregar!: Subscription;

  agregarDatos(){
    this. notaAgregar = this.apiService.agregarNota(this.datosFormulario).subscribe();
  }

  miFormulario:FormGroup = this.fb.group ({
    titulo: ['', [Validators.required, Validators.minLength(5)]],
    msjNota: ['', [Validators.required, Validators.minLength(5)]],
  })

  validacion(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.datosFormulario = this.miFormulario.value;
    this.apiService.agregarNota(this.miFormulario.value).subscribe();
    this.miFormulario.reset();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Has agregado una nueva nota con exito!',
      showConfirmButton: false,
      timer: 1000
    })

    this.router.navigate(['/inicio']);
  
  }

}
