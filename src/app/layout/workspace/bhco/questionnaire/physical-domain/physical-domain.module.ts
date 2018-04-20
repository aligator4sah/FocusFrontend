import { NgModule } from '@angular/core';
import {SharedModuleModule} from '../../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {PhysicalDomainComponent} from './physical-domain.component';
import {DemoQuestionModule} from '../../demographic/demo-question/demo-question.module';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    DemoQuestionModule,
    RouterModule.forChild([
      {path: '', component: PhysicalDomainComponent}
    ])
  ],
  declarations: [
    PhysicalDomainComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    PhysicalDomainComponent,
    RouterModule,
    DemoQuestionModule
  ]
})
export class PhysicalDomainModule { }
