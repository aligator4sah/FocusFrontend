import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list.component';
import {SharedModuleModule} from "../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: QuestionListComponent}
    ])
  ],
  declarations: [QuestionListComponent],
  exports: [
    RouterModule,
    QuestionListComponent
  ]
})
export class QuestionListModule { }
