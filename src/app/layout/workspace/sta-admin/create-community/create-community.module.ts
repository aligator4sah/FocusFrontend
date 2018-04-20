import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCommunityComponent } from './create-community.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path:'', component: CreateCommunityComponent}
    ])
  ],
  declarations: [CreateCommunityComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    CreateCommunityComponent
  ]
})
export class CreateCommunityModule { }
