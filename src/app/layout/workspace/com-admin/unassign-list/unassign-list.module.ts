import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnassignListComponent } from './unassign-list.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild([
      {path: '', component: UnassignListComponent}
    ])
  ],
  declarations: [UnassignListComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    UnassignListComponent
  ]
})
export class UnassignListModule { }
