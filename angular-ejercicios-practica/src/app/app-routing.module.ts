import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeachersListComponent} from "./teachers-list/teachers-list.component";

const routes: Routes = [
  {path:'teachersList', component:TeachersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
