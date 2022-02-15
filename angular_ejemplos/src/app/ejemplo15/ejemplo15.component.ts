import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ejemplo15',
  templateUrl: './ejemplo15.component.html',
  styleUrls: ['./ejemplo15.component.scss']
})

export class Ejemplo15Component implements OnInit {
  miParam = '';

  constructor(public activateRoute: ActivatedRoute) {
    this.miParam = activateRoute.snapshot.params['miParam'];
  }

  ngOnInit(): void {
  }

}
