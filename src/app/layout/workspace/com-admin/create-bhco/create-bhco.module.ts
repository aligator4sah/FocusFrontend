import { NgModule } from '@angular/core';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {CreateBhcoComponent} from './create-bhco.component';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateBhcoComponent}
    ])
  ],
  declarations: [
    CreateBhcoComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    CreateBhcoComponent
  ]
})
export class CreateBhcoModule { }
