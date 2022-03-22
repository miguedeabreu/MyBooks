import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(private apiService: UsuarioService, private router: Router) { }

  iniciarSesion(correo: HTMLInputElement, contrasena: HTMLInputElement)
  {
    let usuario = new Usuario (0,"0","0",correo.value, "0", contrasena.value);
    if (this.validar(usuario))
    {
      this.apiService.postLogin(usuario).subscribe((data: Usuario[])=>
      {
        if (data.length == 0)
        {
          console.log("Los datos introducidos no coinciden.");
        }
        else 
        {
          this.router.navigate(['/libros'])
          console.log(data)
          this.apiService.logueado = true;
          this.apiService.usuario = data[0];
          console.log("Los datos coinciden exitosamente.");
          console.log(this.apiService.logueado);
          console.log(this.apiService.usuario);
        }
      })
    }
  }

  validar(usuario: Usuario)
  {
    let resultado = false
    if (usuario.correo == "" || usuario.correo == "null")
    {
      console.log("AVISO: Campo correo no informado", "bg-warning");
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
