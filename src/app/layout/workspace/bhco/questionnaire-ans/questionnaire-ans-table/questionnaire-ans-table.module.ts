import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireAnsTableComponent } from './questionnaire-ans-table.component';
import {SharedModuleModule} from '../../../../../shared/shared-module/shared-module.module';

@NgModule({
  imports: [
    SharedModuleModule
  ],
  declarations: [QuestionnaireAnsTableComponent],
  exports: [
    QuestionnaireAnsTableComponent
  ]
})
export class QuestionnaireAnsTableModule { }
