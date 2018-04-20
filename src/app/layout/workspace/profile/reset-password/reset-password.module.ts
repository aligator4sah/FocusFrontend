import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: ResetPasswordComponent}
    ])
  ],
  declarations: [ResetPasswordComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    ResetPasswordComponent
  ]
})
export class ResetPasswordModule { }
