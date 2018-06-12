import {Component, Input, OnInit} from '@angular/core';
import {Link} from "../../../d3";



@Component({
  selector: 'app-link-visual',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent implements OnInit {
  @Input('app-link-visual') link: Link;

  constructor() { }

  ngOnInit() {
  }

}
