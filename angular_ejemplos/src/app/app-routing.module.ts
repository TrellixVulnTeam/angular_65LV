import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EjemploComponente01Component} from "./ejemplo-componente01/ejemplo-componente01.component";
import {EjemploComponente02Component} from "./ejemplo-componente02/ejemplo-componente02.component";
import {EjemploComponente03Component} from "./ejemplo-componente03/ejemplo-componente03.component";
import {EjemploComponente04Component} from "./ejemplo-componente04/ejemplo-componente04.component";
import {Ejemplo05Component} from "./ejemplo05/ejemplo05.component";
import {Ejemplo06Component} from "./ejemplo06/ejemplo06.component";
import {ComponenteEjercicioComponent} from "./componente-ejercicio/componente-ejercicio.component";
import {Ejemplo07Component} from "./ejemplo07/ejemplo07.component";
import {Ejemplo08Component} from "./ejemplo08/ejemplo08.component";
import {EjemploEjercicio02Component} from "./ejemplo-ejercicio02/ejemplo-ejercicio02.component";
import {Ejercicio03Component} from "./ejercicio03/ejercicio03.component";
import {Ejemplo09Component} from "./ejemplo09/ejemplo09.component";
import {Ejemplo10Component} from "./ejemplo10/ejemplo10.component";
import {Ejemplo11Component} from "./ejemplo11/ejemplo11.component";
import {Ejemplo12Component} from "./ejemplo12/ejemplo12.component";
import {Ejemplo13PadreComponent} from "./ejemplo13-padre/ejemplo13-padre.component";
import {Ejemplo14Component} from "./ejemplo14/ejemplo14.component";
import {Ejemplo15Component} from "./ejemplo15/ejemplo15.component";
import {Ejemplo16Component} from "./ejemplo16/ejemplo16.component";

const routes: Routes = [
  {path:'componente01', component:EjemploComponente01Component},
  {path:'componente02', component:EjemploComponente02Component},
  {path:'componente03', component:EjemploComponente03Component},
  {path:'componente04', component:EjemploComponente04Component},
  {path:'componente05', component:Ejemplo05Component},
  {path:'componente06', component:Ejemplo06Component},
  {path:'componenteEjercicio', component:ComponenteEjercicioComponent},
  {path:'componente07', component:Ejemplo07Component},
  {path:'componente08', component:Ejemplo08Component},
  {path:'componenteEjercicio02', component:EjemploEjercicio02Component},
  {path:'ejercicio03', component:Ejercicio03Component},
  {path:'ejemplo09', component:Ejemplo09Component},
  {path:'ejemplo10', component:Ejemplo10Component},
  {path:'ejemplo11', component:Ejemplo11Component},
  {path:'ejemplo12', component:Ejemplo12Component},
  {path:'ejemplo13', component:Ejemplo13PadreComponent},
  {path:'ejemplo14', component:Ejemplo14Component},
  {path:'ejemplo15/:miParam', component:Ejemplo15Component},
  {path:'ejemplo16', component:Ejemplo16Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
