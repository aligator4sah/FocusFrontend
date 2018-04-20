import { NgModule } from '@angular/core';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {CreateCMemComponent} from './create-c-mem.component';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateCMemComponent}
    ])
  ],
  declarations: [
    CreateCMemComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    CreateCMemComponent
  ]
})
export class CreateCMemModule { }
