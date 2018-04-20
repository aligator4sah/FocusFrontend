import { NgModule } from '@angular/core';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {CreateAccountComponent} from './create-account.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateAccountComponent}
    ])
  ],
  declarations: [
    CreateAccountComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    CreateAccountComponent
  ]
})
export class CreateAccountModule { }
