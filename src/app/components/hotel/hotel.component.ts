import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HotelService } from '../../servicios/hoteles.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent  {

  hotel:any = {};
  constructor(private activetedRoute: ActivatedRoute, private _hotelService: HotelService) {
    this.activetedRoute.params.subscribe(params =>{
      this.hotel = this._hotelService.getHotel(params['id']);
    })
   }


}
