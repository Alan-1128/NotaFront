import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private usu:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    if(this.usu.isAuthenticated()){
      this.router.navigate(['/inicio']);
    }
  }

  miFormulario:FormGroup = this.fb.group ({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
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

    this.usu.login(this.miFormulario.value).subscribe((resp:any) => {
      console.log(resp);

      this.usu.guardarUsuario(resp.access_token);
      this.usu.guardarToken(resp.access_token);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Has iniciado sección con exito!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/inicio']);
    }, (err:any) => {
      if (err.status == 400) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Incorrecto',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    


    
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }
}
