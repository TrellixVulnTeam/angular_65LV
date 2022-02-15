import { Component, OnInit } from '@angular/core';

@Component({
  /*nombre del componente*/
  selector: 'app-ejemplo-componente01',

  /*ruta del componente*/
  templateUrl: './ejemplo-componente01.component.html',

  /*url de estilos*/
  styleUrls: ['./ejemplo-componente01.component.scss']
})
export class EjemploComponente01Component implements OnInit {
  nombre: string = 'Samu';

  constructor() {
    //this.nombre = 'Samu';
  }

  ngOnInit(): void {
  }

}
