import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponente01Component } from './ejemplo-componente01/ejemplo-componente01.component';
import { EjemploComponente02Component } from './ejemplo-componente02/ejemplo-componente02.component';
import { EjemploComponente03Component } from './ejemplo-componente03/ejemplo-componente03.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EjemploComponente04Component } from './ejemplo-componente04/ejemplo-componente04.component';
import { ComponenteEjercicioComponent } from './componente-ejercicio/componente-ejercicio.component';
import { Ejemplo05Component } from './ejemplo05/ejemplo05.component';
import { Ejemplo06Component } from './ejemplo06/ejemplo06.component';
import { Ejemplo07Component } from './ejemplo07/ejemplo07.component';
import { Ejemplo08Component } from './ejemplo08/ejemplo08.component';
import { EjemploEjercicio02Component } from './ejemplo-ejercicio02/ejemplo-ejercicio02.component';
import { Ejercicio03Component } from './ejercicio03/ejercicio03.component';
import { Ejemplo09Component } from './ejemplo09/ejemplo09.component';
import { Ejemplo10Component } from './ejemplo10/ejemplo10.component';
import { MayusculasParesPipe } from './mayusculas-pares.pipe';
import { Ejemplo11Component } from './ejemplo11/ejemplo11.component';
import { Ejemplo12Component } from './ejemplo12/ejemplo12.component';
import { HijoComponent } from './hijo/hijo.component';
import { Ejemplo13HijoComponent } from './ejemplo13-hijo/ejemplo13-hijo.component';
import { Ejemplo13PadreComponent } from './ejemplo13-padre/ejemplo13-padre.component';
import { Ejemplo14Component } from './ejemplo14/ejemplo14.component';
import { Ejemplo15Component } from './ejemplo15/ejemplo15.component';
import { Ejemplo16Component } from './ejemplo16/ejemplo16.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponente01Component,
    EjemploComponente02Component,
    EjemploComponente03Component,
    EjemploComponente04Component,
    ComponenteEjercicioComponent,
    Ejemplo05Component,
    Ejemplo06Component,
    Ejemplo07Component,
    Ejemplo08Component,
    EjemploEjercicio02Component,
    Ejercicio03Component,
    Ejemplo09Component,
    Ejemplo10Component,
    MayusculasParesPipe,
    Ejemplo11Component,
    Ejemplo12Component,
    HijoComponent,
    Ejemplo13HijoComponent,
    Ejemplo13PadreComponent,
    Ejemplo14Component,
    Ejemplo15Component,
    Ejemplo16Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
