import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../shared/shared-module/control-box.module';
import {RouterModule} from "@angular/router";
import {BhcoLoginComponent, BhcoMessageComponent} from "./bhco-login.component";

@NgModule({
  entryComponents: [
    BhcoMessageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: BhcoLoginComponent}
    ])
  ],
  declarations: [
    BhcoLoginComponent,
    BhcoMessageComponent,
  ],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    BhcoMessageComponent,
    BhcoLoginComponent
  ]
})
export class BhcoLoginModule { }
