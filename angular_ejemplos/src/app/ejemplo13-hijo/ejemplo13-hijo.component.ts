import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo',
  templateUrl: './ejemplo13-hijo.component.html',
  styleUrls: ['./ejemplo13-hijo.component.scss']
})
export class Ejemplo13HijoComponent implements OnInit {

  constructor() { }

  @Output() edadCambia = new EventEmitter<number>();
  _edad:number = 10;

  set edad(valor:number){
    this._edad = valor;
    this.edadCambia.emit(this._edad);
  }

  get edad():number{
    return this._edad;
  }
  ngOnInit(): void {
    this.edadCambia.emit(this._edad);
  }

}
