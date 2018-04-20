import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {InputDateBoxComponent} from './input-date-box.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    InputDateBoxComponent
  ],
  exports: [
    InputDateBoxComponent
  ]
})
export class InputDateBoxModule { }
