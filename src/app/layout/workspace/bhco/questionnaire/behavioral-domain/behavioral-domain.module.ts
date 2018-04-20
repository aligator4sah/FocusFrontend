import { NgModule } from '@angular/core';
import { BehavioralDomainComponent } from './behavioral-domain.component';
import {SharedModuleModule} from '../../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {DemoQuestionModule} from '../../demographic/demo-question/demo-question.module';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    DemoQuestionModule,
    RouterModule.forChild([
      {path: "", component: BehavioralDomainComponent}
    ])
  ],
  declarations: [BehavioralDomainComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    DemoQuestionModule,
    BehavioralDomainComponent
  ]
})
export class BehavioralDomainModule { }
