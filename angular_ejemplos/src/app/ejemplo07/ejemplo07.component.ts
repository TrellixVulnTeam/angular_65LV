import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo07',
  templateUrl: './ejemplo07.component.html',
  styleUrls: ['./ejemplo07.component.scss']
})
export class Ejemplo07Component implements OnInit {

  constructor() { }

  colorText = 'orange';
  getColor(){
    return 'blue'
  }

  hasError(){
    return true;
  }
  ngOnInit(): void {
  }

}
