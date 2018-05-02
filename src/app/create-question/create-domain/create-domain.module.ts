import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDomainComponent } from './create-domain.component';
import {SharedModuleModule} from "../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateDomainComponent}
    ])
  ],
  declarations: [CreateDomainComponent],
  exports: [
    RouterModule,
    CreateDomainComponent
  ]
})
export class CreateDomainModule { }
