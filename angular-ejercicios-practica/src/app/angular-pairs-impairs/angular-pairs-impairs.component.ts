import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pairs-impairs',
  templateUrl: './angular-pairs-impairs.component.html',
  styleUrls: ['./angular-pairs-impairs.component.css']
})
export class AngularPairsImpairsComponent implements OnInit {

  constructor() { }

  pairs:boolean=false;
  impairs:boolean=false;

  onItemChange(){
    if (document.getElementById("button-pair") )
  }

  ngOnInit(): void {
  }

}
