import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo14',
  templateUrl: './ejemplo14.component.html',
  styleUrls: ['./ejemplo14.component.scss']
})
export class Ejemplo14Component implements OnInit {

  constructor() { }


  isAdmin:boolean = false;

  ngOnInit(): void {
  }

}
