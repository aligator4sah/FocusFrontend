import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BhcoListComponent } from './bhco-list.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild([
      {path: '', component: BhcoListComponent}
    ])
  ],
  declarations: [BhcoListComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    BhcoListComponent
  ]
})
export class BhcoListModule { }
