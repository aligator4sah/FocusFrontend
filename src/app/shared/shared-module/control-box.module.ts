import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from './shared-module.module';
import {InputControlBoxModule} from '../input-box/input-control-box/input-control-box.module';
import {InputCheckBoxModule} from '../input-box/input-check-box/input-check-box.module';
import {InputDateBoxModule} from '../input-box/input-date-box/input-date-box.module';
import {InputDefaultBoxComponent} from '../input-box/input-default-box/input-default-box.component';
import {SelectControlBoxModule} from '../select-box/select-control-box/select-control-box.module';
import {RadioControlBoxModule} from '../radio-box/radio-control-box/radio-control-box.module';
import {InputDefaultBoxModule} from '../input-box/input-default-box/input-default-box.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    InputControlBoxModule,
    InputCheckBoxModule,
    InputDateBoxModule,
    InputDefaultBoxModule,
    SelectControlBoxModule,
    RadioControlBoxModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    InputControlBoxModule,
    InputCheckBoxModule,
    InputDateBoxModule,
    InputDefaultBoxModule,
    SelectControlBoxModule,
    RadioControlBoxModule
  ]
})
export class ControlBoxModule { }
