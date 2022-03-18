import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService 
{
  private libros: Libro[] = [
    new Libro ("Harry Potter y la Piedra Filosofal", "Tapa blanda", "J.K. Rowling",
    17.99, "https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg", 1, 1),

    new Libro ("Animales Fantásticos y Dónde Encontrarlos", "Tapa dura", "Newt Scamander",
    9.99, "https://images-na.ssl-images-amazon.com/images/I/41V5ZbZpVHL._SX322_BO1,204,203,200_.jpg", 2, 1),

    new Libro ("Harry Potter y el Prisionero de Azcaban", "Tapa blanda", "J.K. Rowling",
    15.99, "https://images-na.ssl-images-amazon.com/images/I/41G6AGP-QHL._SX303_BO1,204,203,200_.jpg", 3, 1),

    new Libro ("Harry Potter y la Orden del Fénix", "Tapa blanda", "J.K. Rowling",
    18.99, "https://images-na.ssl-images-amazon.com/images/I/41ec8RzKe1L._SX303_BO1,204,203,200_.jpg", 4, 1),

    new Libro ("El tiempo entre costuras", "Tapa blanda", "Maria Dueñas", 
    17.99, "https://images-na.ssl-images-amazon.com/images/I/71k3KwMlt8L.jpg", 5, 2),

    new Libro ("El principito", "Tapa blanda", "Antoine De Saint", 
    7.99, "https://images-na.ssl-images-amazon.com/images/I/41N7hwEecEL._SX312_BO1,204,203,200_.jpg", 26, 2),

    new Libro ("La invención de Hugo Cabret", "Tapa dura", "Brian Selznick ", 
    20.99, "https://images-na.ssl-images-amazon.com/images/I/61LvrXYvumL._SY264_BO1,204,203,200_QL40_ML2_.jpg", 7, 3),

    new Libro ("Animales fantásticos: Los crimenes de Grindelwald", "Tapa blanda", "J.K. Rowling", 
    14.99, "https://images-na.ssl-images-amazon.com/images/I/51Fi00OKJSL._SX299_BO1,204,203,200_.jpg", 8, 1)
    
  ]

  constructor() 
  { 
    
  }

  //METODOS PUBLICOS

  getAll(): Libro[]
  {
    return this.libros;
  }

  add(libro:Libro): void
  {
    this.libros.push(libro)
  }

  getOne(id_libro: number): Libro
  {
    for (let i = 0 ; i < this.libros.length; i++)
    {
      if (this.libros[i].id_libro === id_libro)
      {
        return this.libros[i];
      }  
    }
  }

  edit(libro:Libro): boolean
  {
    for (let i = 0 ; i < this.libros.length; i++)
    {
      if (this.libros[i].id_libro === libro.id_libro)
      {
        return true;
      }  
    }
    return false
  }

  delete(id_libro: number): boolean
  {
    for (let i = 0 ; i < this.libros.length; i++)
    {
      if (this.libros[i].id_libro === id_libro)
      {
        this.libros.splice(i,1)
        return true
      }  
    }
    return false
  }
  
}
