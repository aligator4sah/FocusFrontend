import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from './member-detail.component';
import {SharedModuleModule} from "../../../../shared/shared-module/shared-module.module";
import {RouterModule} from "@angular/router";
import {ChartsModule} from "ng2-charts";


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    SharedModuleModule,
    RouterModule.forChild([
      {path:'', component: MemberDetailComponent}
    ])
  ],
  declarations: [MemberDetailComponent],
  exports: [
    SharedModuleModule,
    MemberDetailComponent,
    RouterModule,
    ChartsModule,
  ]
})
export class MemberDetailModule { }
