import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputCheckBoxComponent} from './input-check-box.component';
import {SharedModuleModule} from '../../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    InputCheckBoxComponent
  ],
  exports: [
    InputCheckBoxComponent
  ]
})
export class InputCheckBoxModule { }
