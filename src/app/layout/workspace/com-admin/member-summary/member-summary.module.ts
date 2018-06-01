import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberSummaryComponent } from './member-summary.component';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {ChartsModule} from "ng2-charts";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ChartsModule,
    RouterModule.forChild([
      {path: '', component: MemberSummaryComponent}
    ])
  ],
  declarations: [MemberSummaryComponent],
  exports: [
    SharedModuleModule,
    ChartsModule,
    RouterModule,
    MemberSummaryComponent
  ]
})
export class MemberSummaryModule { }
