import {BhcoLevelComponent} from './bhco-level.component';
import {SubProfileModule} from "../../workspace/sub-profile/sub-profile.module";

export const bhcoWorkSpaceRoutes = [
  {
    path: '',
    component: BhcoLevelComponent,
    children: [
      {path: '', redirectTo: 'assign', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic.module#DemographicModule'},
      {path: 'questionnaire/:id', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'},
      {path: 'assign', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
      {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
      {path: 'resetPassword', loadChildren: '../../workspace/profile/reset-password/reset-password.module#ResetPasswordModule'},
      {path: 'editProfile', loadChildren: '../../workspace/profile/edit-profile/edit-profile.module#EditProfileModule'},
      {path: 'session', loadChildren: '../../workspace/bhco/session/session.module#SessionModule'},
      {path: 'question-ans', loadChildren: '../../workspace/bhco/questionnaire-ans/questionnaire-ans.module#QuestionnaireAnsModule'},
      {path: 'individual-analysis', loadChildren: "../../workspace/bhco/individual-analysis/individual-analysis.module#IndividualAnalysisModule"},
      {path: 'detail/:id', loadChildren:"../../workspace/bhco/member-detail/member-detail.module#MemberDetailModule"},
      {path: 'domain-list', loadChildren: "../../workspace/bhco/questionnaire/domain-list/domain-list.module#DomainListModule"},
      {path: 'session-question', loadChildren: "../../workspace/bhco/session/session-question/session-question.module#SessionQuestionModule"},
      {path: 'demographic-ans', loadChildren: '../../workspace/bhco/demographic-ans/demographic-ans.module#DemographicAnsModule'},
      {path: 'member-profile/:id', loadChildren: '../../workspace/sub-profile/sub-profile.module#SubProfileModule'}
      ]
  }
];

