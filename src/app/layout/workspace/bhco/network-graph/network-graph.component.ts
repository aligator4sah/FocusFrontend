import { Component, OnInit } from '@angular/core';
import {Statement} from "@angular/compiler";
import {StateService} from "../../../../service/state.service";
import {LocationService} from "../../../../service/location.service";

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.css']
})
export class NetworkGraphComponent implements OnInit {

  member = JSON.parse(localStorage.getItem('curMem'));
  user = JSON.parse(localStorage.getItem('curUser'));
  blocks: any[];

  constructor(
    private stateService: StateService,
    private locationService: LocationService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.existMember$.next(true);
    })
    this.getBlockList();
  }

  getBlockList() {
    this.locationService.getBlockByCommunity(this.user.location).subscribe(value => {
      this.blocks = value;
      console.log(this.blocks);
    })
  }

}
