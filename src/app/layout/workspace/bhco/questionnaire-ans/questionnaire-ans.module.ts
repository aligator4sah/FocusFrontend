import { NgModule } from '@angular/core';
import { QuestionnaireAnsComponent } from './questionnaire-ans.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {QuestionnaireAnsTableModule} from './questionnaire-ans-table/questionnaire-ans-table.module';

@NgModule({
  imports: [
    SharedModuleModule,
    QuestionnaireAnsTableModule,
    RouterModule.forChild([
      {path: "", component: QuestionnaireAnsComponent}
    ])
  ],
  declarations: [QuestionnaireAnsComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    QuestionnaireAnsTableModule,
    QuestionnaireAnsComponent
  ]
})
export class QuestionnaireAnsModule { }
