import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../shared/shared-module/control-box.module';
import {RouterModule} from "@angular/router";
import {BhcoLoginComponent} from "./bhco-login.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: BhcoLoginComponent}
    ])
  ],
  declarations: [
    BhcoLoginComponent
  ],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    BhcoLoginComponent
  ]
})
export class BhcoLoginModule { }
