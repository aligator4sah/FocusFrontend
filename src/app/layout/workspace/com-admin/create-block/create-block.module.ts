import { NgModule } from '@angular/core';
import { CreateBlockComponent } from './create-block.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateBlockComponent}
    ])
  ],
  declarations: [CreateBlockComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule,
    CreateBlockComponent
  ]
})
export class CreateBlockModule { }
