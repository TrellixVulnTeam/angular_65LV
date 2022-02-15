import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo09',
  templateUrl: './ejemplo09.component.html',
  styleUrls: ['./ejemplo09.component.scss']
})
export class Ejemplo09Component implements OnInit {
  nombre:string = "";
  email:string = "";

  constructor() { }

  onSubmit(){
   alert('Formulario enviado' + this.nombre + ',' + this.email);
  }
  ngOnInit(): void {
  }

}
