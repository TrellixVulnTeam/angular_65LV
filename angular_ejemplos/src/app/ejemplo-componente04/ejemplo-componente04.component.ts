import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-componente04',
  templateUrl: './ejemplo-componente04.component.html',
  styleUrls: ['./ejemplo-componente04.component.scss']
})
export class EjemploComponente04Component implements OnInit {
  contador:number = 0;

  constructor() { }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  esPrimo(){
    let numeroPrimo = true;
    for(let i = 1; i< this.contador ; i++){
      if (this.contador/i === Math.round(this.contador/i) && (i!==1 && i!==this.contador)){
        numeroPrimo = false;
        break;
      }
    }
    return numeroPrimo;
  }

  ngOnInit(): void {
  }

}
