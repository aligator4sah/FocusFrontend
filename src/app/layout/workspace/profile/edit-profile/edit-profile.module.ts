import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {MatSlideToggleModule} from "@angular/material";

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    MatSlideToggleModule,
    RouterModule.forChild([
      {path: '', component: EditProfileComponent}
    ])
  ],
  declarations: [EditProfileComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    MatSlideToggleModule,
    EditProfileComponent
  ]
})
export class EditProfileModule { }
