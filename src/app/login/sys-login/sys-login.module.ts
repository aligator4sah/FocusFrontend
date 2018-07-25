import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../shared/shared-module/control-box.module';
import {RouterModule} from "@angular/router";
import {MessageComponent, SysLoginComponent} from "./sys-login.component";

@NgModule({
  entryComponents: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: SysLoginComponent}
    ])
  ],
  declarations: [
    SysLoginComponent,
    MessageComponent
  ],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    MessageComponent,
    SysLoginComponent,
    RouterModule,
  ]
})
export class SysLoginModule { }
