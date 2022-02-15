import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo11',
  templateUrl: './ejemplo11.component.html',
  styleUrls: ['./ejemplo11.component.scss']
})
export class Ejemplo11Component implements OnInit {

  frasePeligrosa = 'hola <script> alert("hack")</script>';
  constructor() { }

  ngOnInit(): void {
  }

}
