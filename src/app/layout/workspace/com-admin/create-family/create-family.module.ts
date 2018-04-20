import { NgModule } from '@angular/core';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {CreateFamilyComponent} from './create-family.component';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateFamilyComponent}
    ])
  ],
  declarations: [
    CreateFamilyComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    CreateFamilyComponent
  ]
})
export class CreateFamilyModule { }
