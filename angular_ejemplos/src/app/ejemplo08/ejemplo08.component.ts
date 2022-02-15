import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo08',
  templateUrl: './ejemplo08.component.html',
  styleUrls: ['./ejemplo08.component.scss']
})
export class Ejemplo08Component implements OnInit {

  constructor() { }
  //num1:number = 0;
  //num2:number = 0;
  resultado:number = 0

  sumar(num1:string,num2:string){
    this.resultado =  Number(num1)+Number(num2);
  }
  ngOnInit(): void {
  }

}
