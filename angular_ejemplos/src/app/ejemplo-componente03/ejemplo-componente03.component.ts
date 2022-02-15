import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-componente03',
  templateUrl: './ejemplo-componente03.component.html',
  styleUrls: ['./ejemplo-componente03.component.scss']
})
export class EjemploComponente03Component implements OnInit {
  nombres:string[] = ['Bea', 'Pepe', 'Angel'];
  constructor() { }

  ngOnInit(): void {
  }

}
