import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class RandomPerson{
  constructor(
  public gender:string,
  public name:string,
  public email:string,
  public cell:string,
  public age:string,
  public picture:string,
  ) {
}
}

@Component({
  selector: 'app-angular-component',
  templateUrl: './angular-component.component.html',
  styleUrls: ['./angular-component.component.css']
})
export class AngularComponentComponent implements OnInit {

  _randomUser: RandomPerson[] = [];

  getRandomUser(): RandomPerson[] {

    this.httpClient.get<any>('https://randomuser.me/api/').subscribe(
      response=>{
        console.log(response);
        this._randomUser=response;
      }
    )

    return this._randomUser;
  }
  constructor(
    private httpClient:HttpClient
  ) {

  }

  ngOnInit(): void {
    this.getRandomUser();
  }

}
