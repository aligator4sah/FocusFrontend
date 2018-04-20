import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateAdminListComponent } from './state-admin-list.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: StateAdminListComponent}
    ])
  ],
  declarations: [StateAdminListComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    StateAdminListComponent
  ]
})
export class StateAdminListModule { }
