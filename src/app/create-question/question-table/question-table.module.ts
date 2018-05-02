import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionTableComponent } from './question-table.component';
import {SharedModuleModule} from "../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";
import {Question} from "../../model/questionBase";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: QuestionTableComponent}
    ])
  ],
  declarations: [QuestionTableComponent],
  exports: [
    RouterModule,
    QuestionTableComponent
  ]
})
export class QuestionTableModule { }
