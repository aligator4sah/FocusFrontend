import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicAnsComponent } from './demographic-ans.component';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../../../shared/shared-module/control-box.module";
import { RouterModule } from "@angular/router";
import {QuestionnaireAnsTableModule} from "../questionnaire-ans/questionnaire-ans-table/questionnaire-ans-table.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    QuestionnaireAnsTableModule,
    RouterModule.forChild([
      {path: '', component: DemographicAnsComponent}
    ])
  ],
  declarations: [DemographicAnsComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    QuestionnaireAnsTableModule,
    RouterModule
  ]
})
export class DemographicAnsModule { }
