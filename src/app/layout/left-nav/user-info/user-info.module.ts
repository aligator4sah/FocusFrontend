import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {UserInfoComponent} from './user-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    UserInfoComponent
  ],
  exports: [
    UserInfoComponent
  ]
})
export class UserInfoModule { }
