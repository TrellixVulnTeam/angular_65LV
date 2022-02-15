import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.component.html',
  styleUrls: ['./ejercicio03.component.scss']
})
export class Ejercicio03Component implements OnInit {

  name:string = "";
  arrayNames:string [] = [];

  introduceNames(){
    this.arrayNames.push(this.name);
    console.log(this.arrayNames);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
