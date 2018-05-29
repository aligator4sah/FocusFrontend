import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCountyComponent } from './create-county.component';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../../../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateCountyComponent}
    ])
  ],
  declarations: [CreateCountyComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule
  ]
})
export class CreateCountyModule { }
