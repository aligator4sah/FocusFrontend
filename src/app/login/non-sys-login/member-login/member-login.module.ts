import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../shared/shared-module/control-box.module';
import {RouterModule} from "@angular/router";
import {MemberLoginComponent} from "./member-login.component";
import {Member} from "../../../model/User";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: MemberLoginComponent}
    ])
  ],
  declarations: [
    MemberLoginComponent
  ],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    MemberLoginComponent,
  ]
})
export class MemberLoginModule { }
