import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoLibro'
})
export class FormatoLibroPipe implements PipeTransform 
{
  transform(value: number): string 
  {
    let result:string;
    result = "Ref-00" + value;

    return result;
  }

}
