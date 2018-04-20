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
    {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'}
  ]
}]
