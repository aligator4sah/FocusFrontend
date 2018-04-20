import { NgModule } from '@angular/core';
import { ComAdminListComponent } from './com-admin-list.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild([
      {path: '', component: ComAdminListComponent}
    ])
  ],
  declarations: [ComAdminListComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    ComAdminListComponent
  ]
})
export class ComAdminListModule { }
