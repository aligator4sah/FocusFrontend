import { NgModule } from '@angular/core';
import { SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule } from '@angular/router';
import {DemographicComponent} from './demographic.component';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {DemoQuestionModule} from './demo-question/demo-question.module';
import {QuestionControlService} from '../../../../shared/shared-control/question-control.service';
import {QuestionService} from '../../../../shared/shared-control/question.service';


@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    DemoQuestionModule,
    RouterModule.forChild([
      {path: '', component: DemographicComponent}
    ])
  ],
  declarations: [
    DemographicComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    DemographicComponent,
    RouterModule,
    DemoQuestionModule
  ],
  providers: [QuestionControlService, QuestionService],
  //bootstrap: [DemographicModule]
})
export class DemographicModule { }
