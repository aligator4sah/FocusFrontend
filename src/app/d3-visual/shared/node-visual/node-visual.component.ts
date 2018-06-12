import {Component, Input, OnInit} from '@angular/core';
import { Node } from '../../../d3';

@Component({
  selector: 'app-node-visual',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent implements OnInit {
  @Input('app-node-visual') node: Node;

  constructor() { }

  ngOnInit() {
  }

}
