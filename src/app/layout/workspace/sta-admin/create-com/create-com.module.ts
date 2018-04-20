import { NgModule } from '@angular/core';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {CreateComComponent} from './create-com.component';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateComComponent}
    ])
  ],
  declarations: [
    CreateComComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    CreateComComponent,
    RouterModule
  ]
})
export class CreateComModule { }
