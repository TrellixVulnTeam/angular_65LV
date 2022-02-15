import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculasPares'
})
export class MayusculasParesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let resultado = '';
    for (let i = 0; i< value.length;i++){
      if (i%2 == 0){
        resultado+=value[i].toUpperCase();
      }else{
        resultado+=value[i]
      }
    }
    return resultado;
  }

}
