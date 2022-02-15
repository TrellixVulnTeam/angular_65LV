import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-componente02',
  templateUrl: './ejemplo-componente02.component.html',
  styleUrls: ['./ejemplo-componente02.component.scss']
})
export class EjemploComponente02Component implements OnInit {
  contador : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }


}


