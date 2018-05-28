import {SysLevelComponent} from './sys-level.component';

export const routes = [{
  path: '',
  component: SysLevelComponent,
  children: [
    {path: '', redirectTo: 'createAccount', pathMatch: 'full'},
    {path: 'analysis', loadChildren: '../../workspace/sys-admin/analysis/analysis.module#AnalysisModule'},
    {path: 'createAccount', loadChildren: '../../workspace/sys-admin/create-account/create-account.module#CreateAccountModule'},
    {path: 'memberList', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
    {path: 'stateList', loadChildren: '../../workspace/sys-admin/state-admin-list/state-admin-list.module#StateAdminListModule'},
    {path: 'comList', loadChildren: '../../workspace/sta-admin/com-admin-list/com-admin-list.module#ComAdminListModule'},
    {path: 'bhcoList', loadChildren: '../../workspace/com-admin/bhco-list/bhco-list.module#BhcoListModule'},
    {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
    {path: 'question-table', loadChildren: '../../../create-question/question-table/question-table.module#QuestionTableModule'},
    {path: 'question-list', loadChildren: '../../../create-question/question-list/question-list.module#QuestionListModule'},
    {path: 'domain-list', loadChildren: '../../../create-question/create-domain/create-domain.module#CreateDomainModule'},
    {path: 'input-question', loadChildren: '../../../create-question/input-question/input-question.module#InputQuestionModule'},
    {path: 'state-admin-profile/:id', loadChildren: '../../workspace/sub-profile/sub-profile.module#SubProfileModule'}
  ]
}]
