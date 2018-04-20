import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDefaultBoxComponent } from './select-default-box.component';
import {SharedModuleModule} from "../../shared-module/shared-module.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [SelectDefaultBoxComponent],
  exports: [
    SelectDefaultBoxComponent
  ]
})
export class SelectDefaultBoxModule { }
