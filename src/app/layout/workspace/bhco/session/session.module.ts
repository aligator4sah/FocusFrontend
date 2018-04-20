import { NgModule } from '@angular/core';
import { SessionComponent } from './session.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild([
      {path: "", component: SessionComponent}
    ])
  ],
  declarations: [SessionComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    SessionComponent
  ]
})
export class SessionModule { }
