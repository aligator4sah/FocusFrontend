import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkGraphComponent } from './network-graph.component';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../../../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";
import {GraphModule} from "../../../../d3-visual/graph/graph.module";
import {D3Service} from "../../../../d3";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    GraphModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: NetworkGraphComponent}
    ])
  ],
  declarations: [NetworkGraphComponent],
  providers: [
    D3Service,
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    GraphModule,
    NetworkGraphComponent,
  ]
})
export class NetworkGraphModule { }
