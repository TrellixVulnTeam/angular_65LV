import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-padre',
  templateUrl: './ejemplo13-padre.component.html',
  styleUrls: ['./ejemplo13-padre.component.scss']
})
export class Ejemplo13PadreComponent implements OnInit {

  constructor() { }
  edadHijo:number=0;

  hijoCambiaSuEdad(edad:number){
    this.edadHijo = edad;
  }

  ngOnInit(): void {
  }

}
