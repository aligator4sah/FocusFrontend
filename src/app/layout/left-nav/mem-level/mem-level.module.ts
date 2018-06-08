import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MemLevelComponent} from './mem-level.component';
import {LayoutModule} from '../../layout/layout.module';
import {MemberDetailModule} from "../../workspace/bhco/member-detail/member-detail.module";
import {DemographicAnsModule} from "../../workspace/bhco/demographic-ans/demographic-ans.module";

export const routes = [
  {
    path: '',
    component: MemLevelComponent,
    children: [
      {path: '', redirectTo: 'member-detail', pathMatch: 'full'},
      {path: 'member-detail', loadChildren: '../../workspace/bhco/member-detail/member-detail.module#MemberDetailModule'},
      {path: 'demographic-ans', loadChildren: '../../workspace/bhco/demographic-ans/demographic-ans.module#DemographicAnsModule'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      // {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic/demographic.module#DemographicModule'},
      {path: 'questionnaire', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'},
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
