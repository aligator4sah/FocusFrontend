import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {InputControlBoxComponent} from './input-control-box.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    InputControlBoxComponent
  ],
  exports:[
    InputControlBoxComponent
  ]
})
export class InputControlBoxModule { }
