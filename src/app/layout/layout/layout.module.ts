import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadBarComponent } from '../head-bar/head-bar.component';
import { LeftNavComponent} from '../left-nav/left-nav.component';
import { EqualValidatorDirective } from '../workspace/equal-validator/equal-validator.directive'
import {SharedModuleModule} from '../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../shared/shared-module/control-box.module';
import {HeaderModule} from '../head-bar/header/header.module';
import {FooterModule} from '../left-nav/footer/footer.module';
import {UserInfoModule} from '../left-nav/user-info/user-info.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    HeaderModule,
    FooterModule,
    UserInfoModule
  ],
  declarations: [
    LeftNavComponent,
    EqualValidatorDirective,
    HeadBarComponent
  ],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    HeaderModule,
    FooterModule,
    UserInfoModule,
    LeftNavComponent,
    HeadBarComponent,
    EqualValidatorDirective,
  ]
})
export class LayoutModule { }
