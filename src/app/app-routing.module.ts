import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import {HotelComponent} from './components/hotel/hotel.component'
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'hoteles', component: HotelesComponent},
  {path: 'hotel/:id', component: HotelComponent},
  {path: 'buscador/:termino', component: BuscadorComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
