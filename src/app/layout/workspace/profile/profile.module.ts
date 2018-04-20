import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild([
      {path:'', component: ProfileComponent}
    ])
  ],
  declarations: [ProfileComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    ProfileComponent
  ]
})
export class ProfileModule { }
