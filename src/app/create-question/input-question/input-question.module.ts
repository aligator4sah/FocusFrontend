import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputQuestionComponent } from './input-question.component';
import {SharedModuleModule} from "../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: InputQuestionComponent}
    ])
  ],
  declarations: [InputQuestionComponent],
  exports: [
    RouterModule,
    InputQuestionComponent
  ]
})
export class InputQuestionModule { }
