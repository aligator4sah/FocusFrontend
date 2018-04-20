import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {AnalysisComponent} from "./analysis.component";
import {RouterModule} from "@angular/router";
import {ChartsModule} from "ng2-charts";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTjceIJNbQ0_F8Y7oujpvMOn5CXP7i3A4'
    }),
    RouterModule.forChild([
      {path: '', component: AnalysisComponent}
    ])
  ],
  declarations: [AnalysisComponent],
  exports: [
    SharedModuleModule,
    ChartsModule,
    AnalysisComponent,
    RouterModule,
    AgmCoreModule
  ]
})
export class AnalysisModule { }
