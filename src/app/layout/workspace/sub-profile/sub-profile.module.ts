import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubProfileComponent } from './sub-profile.component';
import {SharedModuleModule} from "../../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../../shared/shared-module/control-box.module";
import {Router, RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path:'', component: SubProfileComponent}
    ])
  ],
  declarations: [SubProfileComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    SubProfileComponent,
    RouterModule
  ]
})
export class SubProfileModule { }
