import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkGraphComponent } from './network-graph.component';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../../../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: NetworkGraphComponent}
    ])
  ],
  declarations: [NetworkGraphComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    NetworkGraphComponent,
  ]
})
export class NetworkGraphModule { }
