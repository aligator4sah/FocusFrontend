import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {SelectControlBoxComponent} from './select-control-box.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    SelectControlBoxComponent
  ],
  exports: [
    SelectControlBoxComponent
  ]
})
export class SelectControlBoxModule { }
