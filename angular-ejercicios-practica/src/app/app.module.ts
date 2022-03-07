import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import {FormsModule} from "@angular/forms";
import { MultiplyNumbersComponent } from './multiply-numbers/multiply-numbers.component';
import { AngularPairsImpairsComponent } from './angular-pairs-impairs/angular-pairs-impairs.component';
import { AngularPairsImpairsChildComponent } from './angular-pairs-impairs-child/angular-pairs-impairs-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersListComponent,
    MultiplyNumbersComponent,
    AngularPairsImpairsComponent,
    AngularPairsImpairsChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
