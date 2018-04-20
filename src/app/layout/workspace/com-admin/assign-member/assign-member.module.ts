import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignMemberComponent } from './assign-member.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: AssignMemberComponent}
    ])
  ],
  declarations: [AssignMemberComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    AssignMemberComponent
  ]
})
export class AssignMemberModule { }
