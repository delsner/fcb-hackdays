import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EpService } from '../../../shared/services/ep.service';

@Component({
  selector: 'draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  lat: number = 48.218713;
  lng: number = 11.624718;
  mapDraggable = false;
  zoom = 13;
  
  constructor(private epService: EpService, private router: Router) { }

  ngOnInit() {
  }

  onJoin() {
    this.epService.add(5);
    this.router.navigateByUrl('community/account');
  }

}
