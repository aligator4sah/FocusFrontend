import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../shared/shared-module/control-box.module';
import {RouterModule} from "@angular/router";
import {MemberLoginComponent, MemberMessageComponent} from "./member-login.component";
import {Member} from "../../../model/User";

@NgModule({
  entryComponents: [
    MemberMessageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: MemberLoginComponent}
    ])
  ],
  declarations: [
    MemberLoginComponent,
    MemberMessageComponent
  ],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    MemberLoginComponent,
    MemberMessageComponent
  ]
})
export class MemberLoginModule { }
