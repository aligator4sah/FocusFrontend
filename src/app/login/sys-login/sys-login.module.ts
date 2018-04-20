import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../shared/shared-module/control-box.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule
  ]
})
export class SysLoginModule { }
