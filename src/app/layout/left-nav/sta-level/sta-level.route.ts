import {StaLevelComponent} from './sta-level.component';

export const routes = [{
  path: '',
  component: StaLevelComponent,
  children: [
    {path: '', redirectTo: 'createCom', pathMatch: 'full'},
    {path: 'createCom', loadChildren: '../../workspace/sta-admin/create-com/create-com.module#CreateComModule'},
    {path: 'createCommunity', loadChildren: '../../workspace/sta-admin/create-community/create-community.module#CreateCommunityModule'},
    {path: 'comList', loadChildren: '../../workspace/sta-admin/com-admin-list/com-admin-list.module#ComAdminListModule'},
    {path: 'bhcoList', loadChildren: '../../workspace/com-admin/bhco-list/bhco-list.module#BhcoListModule'},
    {path: 'memberList', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
    {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
    {path: 'edit-profile', loadChildren: '../../workspace/profile/edit-profile/edit-profile.module#EditProfileModule'},
    {path: 'create-county', loadChildren: '../../workspace/sta-admin/create-county/create-county.module#CreateCountyModule'},
    {path: 'comadmin-profile/:id', loadChildren: '../../workspace/sub-profile/sub-profile.module#SubProfileModule'},
    {path: 'member-summary', loadChildren: '../../workspace/com-admin/member-summary/member-summary.module#MemberSummaryModule'},
  ]
}
]
