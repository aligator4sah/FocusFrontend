import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MemLevelComponent} from './mem-level.component';
import {LayoutModule} from '../../layout/layout.module';
import {SessionModule} from "../../workspace/bhco/session/session.module";
import {DomainListModule} from "../../workspace/bhco/questionnaire/domain-list/domain-list.module";
import {IndividualAnalysisModule} from "../../workspace/bhco/individual-analysis/individual-analysis.module";
import {QuestionnaireAnsModule} from "../../workspace/bhco/questionnaire-ans/questionnaire-ans.module";

export const routes = [
  {
    path: '',
    component: MemLevelComponent,
    children: [
      {path: '', redirectTo: 'member-detail', pathMatch: 'full'},
      {path: 'member-detail', loadChildren: '../../workspace/bhco/member-detail/member-detail.module#MemberDetailModule'},
      {path: 'demographic-ans', loadChildren: '../../workspace/bhco/demographic-ans/demographic-ans.module#DemographicAnsModule'},
      {path: 'session', loadChildren: '../../workspace/bhco/session/session.module#SessionModule'},
      {path: 'domain-list', loadChildren: '../../workspace/bhco/questionnaire/domain-list/domain-list.module#DomainListModule'},
      {path: 'individual-analysis', loadChildren: '../../workspace/bhco/individual-analysis/individual-analysis.module#IndividualAnalysisModule'},
      {path: 'question-ans', loadChildren: '../../workspace/bhco/questionnaire-ans/questionnaire-ans.module#QuestionnaireAnsModule'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
      {path: 'edit-profile', loadChildren: '../../workspace/profile/edit-profile/edit-profile.module#EditProfileModule'}
    ]
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ MemLevelComponent ],
  exports: [
    LayoutModule,
    RouterModule,
    MemLevelComponent
  ]
})
export class MemLevelModule { }
