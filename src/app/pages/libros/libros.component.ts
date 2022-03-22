import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[]= [];

  constructor(public librosService: LibrosService, private usuarioService: UsuarioService) 
  { 
    this.librosService.getAll(this.usuarioService.usuario.id_usuario).subscribe((data: any)=>
    {
      this.libros = data
    })

  }

  get(nuevoInput: HTMLInputElement)
  {
    if (nuevoInput.value === "")
    {
      this.librosService.getAll(this.usuarioService.usuario.id_usuario).subscribe((data: any)=>
      {
        this.libros = data
      })
    }
    else
    {
      this.librosService.getOne(this.usuarioService.usuario.id_usuario,Number (nuevoInput.value))
      .subscribe((data: any)=>
      {
        this.libros = data
      })
    }
  }

  anadir(nuevoTitulo: HTMLInputElement, nuevoTipo: HTMLInputElement, nuevoAutor: HTMLInputElement,
          nuevoPrecio: HTMLInputElement, nuevoPhoto: HTMLInputElement, nuevoIdLibro: HTMLInputElement)  
  {
    console.log("entrar")
    
    let nuevoLibro = new Libro (nuevoTitulo.value, nuevoTipo.value, nuevoAutor.value, Number (nuevoPrecio.value),
                         nuevoPhoto.value, Number (nuevoIdLibro.value),this.usuarioService.usuario.id_usuario)
                         
    console.log(nuevoLibro)
    this.librosService.add(nuevoLibro).subscribe((data:any)=>
    {
      nuevoLibro.id_libro = data
      this.libros.push(nuevoLibro)
      console.log(data)
    })
  }

  delete(id_libro: number)
  {
    console.log(id_libro)
    this.librosService.delete(id_libro).subscribe((data:any)=>
    {
      for (let i = 0 ; i < this.libros.length ; i++)
      {
        if (this.libros[i].id_libro === id_libro)
        {
          this.libros.splice(i,1)
        }
      }
      console.log("Libro eliminado.")
      console.log(data)
    })
  }

  edit(nuevoTitulo: HTMLInputElement, nuevoTipo: HTMLInputElement, nuevoAutor: HTMLInputElement,
      nuevoPrecio: HTMLInputElement, nuevoPhoto: HTMLInputElement, nuevoIdLibro: HTMLInputElement)
  {
    let modificaLibro = new Libro (nuevoTitulo.value, nuevoTipo.value, nuevoAutor.value, Number (nuevoPrecio.value),
                         nuevoPhoto.value, Number (nuevoIdLibro.value), this.usuarioService.usuario.id_usuario)

    this.librosService.edit(modificaLibro).subscribe((data:any)=>
    {
      for (let i = 0 ; i < this.libros.length ; i++)
      {
        if (this.libros[i].id_libro === modificaLibro.id_libro)
        {
          this.libros[i] = modificaLibro
        }
      }
      console.log(data)
      console.log("Libro modificado.");
      
    })
  }

  ngOnInit(): void {
  }

}
