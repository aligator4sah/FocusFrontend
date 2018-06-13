import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import {DraggableDirective, ZoomableDirective} from "../../d3/directives";
import {LinkVisualModule} from "../shared/link-visual/link-visual.module";
import {NodeVisualModule} from "../shared/node-visual/node-visual.module";

@NgModule({
  imports: [
    CommonModule,
    LinkVisualModule,
    NodeVisualModule,
  ],
  declarations: [
    GraphComponent,
    ZoomableDirective,
    DraggableDirective,
  ],
  exports: [
    CommonModule,
    GraphComponent,
    ZoomableDirective,
    DraggableDirective,
    LinkVisualModule,
    NodeVisualModule,
  ]
})
export class GraphModule { }
