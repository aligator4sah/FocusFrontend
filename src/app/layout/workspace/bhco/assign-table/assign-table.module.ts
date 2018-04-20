import { NgModule } from '@angular/core';
import { AssignTableComponent } from './assign-table.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {MemberDetailModule} from "../member-detail/member-detail.module";

@NgModule({
  imports: [
    SharedModuleModule,
    //ControlBoxModule,
    RouterModule.forChild([
      {path:'', component: AssignTableComponent}
    ])
  ],
  declarations: [AssignTableComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    //ControlBoxModule,
    AssignTableComponent
  ]

})
export class AssignTableModule { }
