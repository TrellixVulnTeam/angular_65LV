import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-ejercicio02',
  templateUrl: './ejemplo-ejercicio02.component.html',
  styleUrls: ['./ejemplo-ejercicio02.component.scss']
})
export class EjemploEjercicio02Component implements OnInit {

  nombre:string="";

  profesores:string [] = ['bea', 'pepe', 'angel', 'isabel'];

  getNombre(){
    return this.profesores.includes(this.nombre.toLowerCase());
  }
  getColor(){
    return this.getNombre() ? 'green' : 'red'
  }

  constructor() {}

  ngOnInit(): void {
  }

}
