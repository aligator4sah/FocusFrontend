import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {InputDefaultBoxComponent} from './input-default-box.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    InputDefaultBoxComponent
  ],
  exports: [
    InputDefaultBoxComponent
  ]
})
export class InputDefaultBoxModule { }
