import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: EditProfileComponent}
    ])
  ],
  declarations: [EditProfileComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    EditProfileComponent
  ]
})
export class EditProfileModule { }
