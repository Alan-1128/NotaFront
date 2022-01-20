import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(public usu:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    
  }

  logout():void {
    this.usu.logout();
    Swal.fire({
      title: 'Has cerrado sesión!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.router.navigate(['/logging']);
  }

}
