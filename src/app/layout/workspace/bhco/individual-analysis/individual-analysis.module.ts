import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualAnalysisComponent } from './individual-analysis.component';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {RouterModule} from "@angular/router";
import {ChartsModule} from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ChartsModule,
    RouterModule.forChild([
      {path: '', component: IndividualAnalysisComponent}
    ])
  ],
  declarations: [IndividualAnalysisComponent],
  exports: [
    SharedModuleModule,
    IndividualAnalysisComponent,
    ChartsModule,
    RouterModule
  ]
})
export class IndividualAnalysisModule { }
