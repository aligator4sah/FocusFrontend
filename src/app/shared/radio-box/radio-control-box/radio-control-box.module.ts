import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {RadioControlBoxComponent} from './radio-control-box.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    RadioControlBoxComponent
  ],
  exports: [
    RadioControlBoxComponent
  ]
})
export class RadioControlBoxModule { }
