import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ejemplo16',
  templateUrl: './ejemplo16.component.html',
  styleUrls: ['./ejemplo16.component.scss']
})
export class Ejemplo16Component implements OnInit {

  public form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required] ,
      email: ['', Validators.required, Validators.email]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(formValue:any){
    alert('Me envían el form: ' + formValue.email);
  }

}
