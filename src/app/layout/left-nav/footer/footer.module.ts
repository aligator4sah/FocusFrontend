import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../shared/shared-module/control-box.module';
import {FooterComponent} from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
