import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {HotelService} from '../../servicios/hoteles.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  hoteles:any[];
	termino:string;
  constructor(private _buscarService:HotelService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.hoteles = this._buscarService.buscarHotel(params['termino']);
      this.termino = params["termino"];
    })
  }
  verHotel(idx:number){
    this.router.navigate(['/hotel',idx])
  }
}
