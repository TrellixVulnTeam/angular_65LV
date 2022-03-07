import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeachersListComponent} from "./teachers-list/teachers-list.component";
import {MultiplyNumbersComponent} from "./multiply-numbers/multiply-numbers.component";
import {AngularPairsImpairsComponent} from "./angular-pairs-impairs/angular-pairs-impairs.component";

const routes: Routes = [
  {path:'teachersList', component:TeachersListComponent},
  {path:'multiply', component:MultiplyNumbersComponent},
  {path:'pairs-impairs', component:AngularPairsImpairsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
