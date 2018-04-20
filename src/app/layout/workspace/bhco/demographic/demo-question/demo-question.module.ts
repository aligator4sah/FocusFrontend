import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../../shared/shared-module/control-box.module';
import {DemoQuestionComponent} from './demo-question.component';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule
  ],
  declarations: [
    DemoQuestionComponent
  ],
  exports: [
    DemoQuestionComponent
  ]
})
export class DemoQuestionModule { }
