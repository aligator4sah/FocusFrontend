import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuestionService} from '../../../shared/shared-control/question.service';
import {QuestionControlService} from '../../../shared/shared-control/question-control.service';
import {BhcoLevelComponent} from './bhco-level.component';
import {bhcoWorkSpaceRoutes} from './bhco.routes';
import {LayoutModule} from '../../layout/layout.module';


@NgModule( {
  imports: [
    LayoutModule,
    RouterModule.forChild(bhcoWorkSpaceRoutes)
  ],
  exports: [
    RouterModule,
    BhcoLevelComponent,
    LayoutModule
  ],
  declarations: [
    BhcoLevelComponent
  ],
  providers: [QuestionControlService, QuestionService],
  }
)
export class BhcoModule{}
