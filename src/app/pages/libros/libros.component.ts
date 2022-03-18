import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor(public librosService: LibrosService) 
  { 
    this.libros = this.librosService.getAll()
  }

  get(nuevoInput: HTMLInputElement)
  {
    if (nuevoInput.value === "")
    {
      this.libros = this.librosService.getAll()
    }
    else
    {
      this.libros = new Array (this.librosService.getOne(Number (nuevoInput.value)))
    }
  }

  anadir(nuevoTitulo: HTMLInputElement, nuevoTipo: HTMLInputElement, nuevoAutor: HTMLInputElement,
          nuevoPrecio: HTMLInputElement, nuevoPhoto: HTMLInputElement, nuevoIdLibro: HTMLInputElement)  
  {
    let nuevoLibro = new Libro (nuevoTitulo.value, nuevoTipo.value, nuevoAutor.value, Number (nuevoPrecio.value),
                         nuevoPhoto.value, Number (nuevoIdLibro.value))

    this.librosService.add(nuevoLibro)
  }

  delete(id_libro: number)
  {
    console.log(id_libro)
    this.librosService.delete(id_libro)
  }

  edit(nuevoTitulo: HTMLInputElement, nuevoTipo: HTMLInputElement, nuevoAutor: HTMLInputElement,
      nuevoPrecio: HTMLInputElement, nuevoPhoto: HTMLInputElement, nuevoIdLibro: HTMLInputElement)
  {
    let modificaLibro = new Libro (nuevoTitulo.value, nuevoTipo.value, nuevoAutor.value, Number (nuevoPrecio.value),
                         nuevoPhoto.value, Number (nuevoIdLibro.value))

    this.librosService.edit(modificaLibro)
  }
  
  ngOnInit(): void {
  }

}
