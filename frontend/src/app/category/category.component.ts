import { Component, OnInit } from '@angular/core';
import {EpService} from "../shared/services/ep.service";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private epService: EpService) { }

  ngOnInit() {
  }

}
