import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public miUsuario: Usuario

  constructor() 
  {
    this.miUsuario = new Usuario (1, "Dita", "Coeforas", "ditacoeforas@bulldog.com", 
                                  "123", "456")
  }

  enviar(nuevoNombre: HTMLInputElement, nuevoApellido: HTMLInputElement, 
          nuevoCorreo: HTMLInputElement, nuevoURL: HTMLInputElement)
  {
    console.log(this.miUsuario.nombre);
    this.miUsuario.nombre = nuevoNombre.value;
    this.miUsuario.apellido = nuevoApellido.value;
    this.miUsuario.correo = nuevoCorreo.value;
    this.miUsuario.url = nuevoURL.value;
    console.log(this.miUsuario.nombre);
  }

  ngOnInit(): void {
  }

}
