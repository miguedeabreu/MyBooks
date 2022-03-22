import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  private url = "http://localhost:3000";
  public logueado: boolean;
  public usuario: Usuario;

  constructor(private http: HttpClient)
  {
    this.logueado = false;
  }

  postRegister (usuario: Usuario) 
  {
    return this.http.post(this.url + "/registro", usuario)
  }

  postLogin (usuario: Usuario)
  {
    return this.http.post(this.url + "/login", usuario)
  }

}
