import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../servicios/hoteles.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  hoteles:any[] = []

  constructor(private _hotelesService:HotelService) { }

  ngOnInit() {
    this.hoteles = this._hotelesService.getHoteles();
  }

}
