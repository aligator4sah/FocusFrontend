import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import {SHARED_FORM_DIRECTIVES} from "@angular/forms/src/directives";
import {SharedModuleModule} from "../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";
import {CreateDomainComponent} from "./create-domain/create-domain.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateQuestionComponent},
      {path: 'createDomain', component: CreateDomainComponent}
    ])
  ],
  declarations: [
    CreateQuestionComponent,
    CreateDomainComponent,
    ],
  exports: [
    CreateQuestionComponent,
    SharedModuleModule,
    ControlBoxModule,
    CommonModule,
  ]
})
export class CreateQuestionModule { }
