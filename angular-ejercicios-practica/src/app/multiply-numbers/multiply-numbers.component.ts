import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiply-numbers',
  templateUrl: './multiply-numbers.component.html',
  styleUrls: ['./multiply-numbers.component.css']
})
export class MultiplyNumbersComponent implements OnInit {

  number01:string='';
  number02:string='';

  result = (num01:string, num02:string) => Number(num01)*Number(num02);

  constructor() { }

  ngOnInit(): void {
  }

}
