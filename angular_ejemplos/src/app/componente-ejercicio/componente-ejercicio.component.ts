import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-ejercicio',
  templateUrl: './componente-ejercicio.component.html',
  styleUrls: ['./componente-ejercicio.component.scss']
})
export class ComponenteEjercicioComponent implements OnInit {

  constructor() { }

  numero:number = 0;

  numRandom(){
    return this.numero =  Math.round(Math.random()*100);
  }

  cero(){
    return this.numero = 0;
  }

  ngOnInit(): void {
  }

}
