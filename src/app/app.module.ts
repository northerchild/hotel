import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import {AppRoutingModule} from './app-routing.module';

//servicios
import {HotelService} from './servicios/hoteles.service'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { from } from 'rxjs';
import { HotelComponent } from './components/hotel/hotel.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HotelesComponent,
    HotelComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
