import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import {SharedModuleModule} from "../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material";
import {QuestionListComponent} from "./question-list/question-list.component";
import {QuestionListModule} from "./question-list/question-list.module";
import {InputQuestionModule} from "./input-question/input-question.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    MatTooltipModule,
    ControlBoxModule,
    RouterModule.forChild([
      { path: '',
        component: CreateQuestionComponent,
        children: [
          {path: '', redirectTo:'inputQue', pathMatch: "full"},
          {path: 'createDomain', loadChildren: './create-domain/create-domain.module#CreateDomainModule'},
          {path: 'questionList', loadChildren: './question-list/question-list.module#QuestionListModule'},
          {path: 'questionTab', loadChildren: './question-table/question-table.module#QuestionTableModule'},
          {path: 'inputQue', loadChildren: './input-question/input-question.module#InputQuestionModule'}
      ]},
    ])
  ],
  declarations: [
    CreateQuestionComponent
    ],
  exports: [
    CreateQuestionComponent,
    SharedModuleModule,
    ControlBoxModule,
    CommonModule,
    MatTooltipModule,
    RouterModule
  ]
})
export class CreateQuestionModule { }
