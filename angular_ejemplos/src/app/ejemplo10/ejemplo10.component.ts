import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo10',
  templateUrl: './ejemplo10.component.html',
  styleUrls: ['./ejemplo10.component.scss']
})
export class Ejemplo10Component implements OnInit {

  fecha = new Date();
  nombre:string = 'samu';

  constructor() { }

  ngOnInit(): void {
  }

}
