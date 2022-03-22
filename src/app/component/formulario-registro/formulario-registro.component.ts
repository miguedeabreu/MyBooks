import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario: Usuario;

  constructor(private apiService: UsuarioService) { }

  registrarUsuario(nuevoNombre: HTMLInputElement, nuevoApellido: HTMLInputElement,
                  nuevoCorreo: HTMLInputElement, nuevoUrl: HTMLInputElement,
                  nuevoPassword: HTMLInputElement, nuevoPassword1: HTMLInputElement)
  {
  let usuario = new Usuario (0, nuevoNombre.value, nuevoApellido.value, 
              nuevoCorreo.value, nuevoUrl.value, nuevoPassword.value)

  if (this.validar(usuario))
  {
    console.log(usuario)
    if (nuevoPassword.value == nuevoPassword1.value)
    {
      this.apiService.postRegister(usuario).subscribe(function(data)
      {
        console.log(data)
        this.data = data[0];
      })
      console.log("Contraseña coincide");
    }
    else
    {
      console.log("Contraseña no coincide");
    }
  }
  }

  validar(usuario: Usuario)
  {
  let resultado = false
  if (usuario.nombre == "" || usuario.nombre == "null")
  {
  console.log("AVISO: Campo nombre no informado", "bg-warning");
  }
  else if (usuario.apellido == "" || usuario.apellido == "null")
  {
  console.log("AVISO: Campo apellido no informado", "bg-warning");
  }
  else if (usuario.correo == "" || usuario.correo == "null")
  {
  console.log("AVISO: Campo correo no informado", "bg-warning");
  }
  else if (usuario.url == "" || usuario.url == "null")
  {
  console.log("AVISO: Campo URL de foto no informado", "bg-warning");  
  }
  else if (usuario.password == "" || usuario.password == "null")
  {
  console.log("AVISO: Campo contraseña no informado", "bg-warning");
  }
  else
  resultado = true

  return resultado;
  }

  ngOnInit(): void {
  }

}
