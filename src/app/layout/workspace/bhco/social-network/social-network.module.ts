import { NgModule } from '@angular/core';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {SocialNetworkAnswerGroupComponent} from './social-network-answer-group/social-network-answer-group.component';
import {SocialNetworkComponent} from './social-network.component';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';

@NgModule({
  imports: [
    //CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: SocialNetworkComponent}
    ])
  ],
  declarations: [
    SocialNetworkComponent,
    SocialNetworkAnswerGroupComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    SocialNetworkComponent,
    SocialNetworkAnswerGroupComponent,
    RouterModule
  ]
})
export class SocialNetworkModule { }
