import {BhcoLevelComponent} from './bhco-level.component';

export const bhcoWorkSpaceRoutes = [
  {
    path: '',
    component: BhcoLevelComponent,
    children: [
      {path: '', redirectTo: 'assign', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic.module#DemographicModule'},
      {path: 'physical-domain', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'},
      {path: 'behavioral-domain', loadChildren: '../../workspace/bhco/questionnaire/behavioral-domain/behavioral-domain.module#BehavioralDomainModule'},
      {path: 'assign', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
      {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
      {path: 'resetPassword', loadChildren: '../../workspace/profile/reset-password/reset-password.module#ResetPasswordModule'},
      {path: 'editProfile', loadChildren: '../../workspace/profile/edit-profile/edit-profile.module#EditProfileModule'},
      {path: 'session', loadChildren: '../../workspace/bhco/session/session.module#SessionModule'},
      {path: 'question-ans', loadChildren: '../../workspace/bhco/questionnaire-ans/questionnaire-ans.module#QuestionnaireAnsModule'},
      {path: 'individual-analysis', loadChildren: "../../workspace/bhco/individual-analysis/individual-analysis.module#IndividualAnalysisModule"},
      {path: 'detail/:id', loadChildren:"../../workspace/bhco/member-detail/member-detail.module#MemberDetailModule"},
      ]
  }
];

