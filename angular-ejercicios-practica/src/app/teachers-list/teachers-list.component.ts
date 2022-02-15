import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  teacherName:string = '';
  teachersList:string[] = [];

  addTeacher(){
    if (this.teacherName!=='') this.teachersList.push(this.teacherName);
      console.log(this.teachersList);
  }

  eliminateTeacher(teacher:string){
    const index:number = this.teachersList.indexOf(teacher);
    if (index!==-1) this.teachersList.splice(index,1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
