import { Component, OnInit } from '@angular/core';
import {StateService} from "../../../../service/state.service";
import {LocationService} from "../../../../service/location.service";
import {Link, Node} from "../../../../d3/models";
import CONFIG from "../../../../app.config";

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.css']
})
export class NetworkGraphComponent implements OnInit {

  member = JSON.parse(localStorage.getItem('curMem'));
  user = JSON.parse(localStorage.getItem('curUser'));
  blocks: any[];

  nodes: Node[] = [];
  links: Link[] = [];

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

  generateGraph() {
    const N = CONFIG.N,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

}
