import {ComLevelComponent} from './com-level.component';

export const routes = [
  {
    path: '',
    component: ComLevelComponent,
    children: [
      {path: '', redirectTo: 'bhcoList', pathMatch: 'full'},
      {path: 'create-family', loadChildren: '../../workspace/com-admin/create-family/create-family.module#CreateFamilyModule'},
      {path: 'create-c-mem', loadChildren: '../../workspace/com-admin/create-c-mem/create-c-mem.module#CreateCMemModule'},
      {path: 'create-bhco', loadChildren: '../../workspace/com-admin/create-bhco/create-bhco.module#CreateBhcoModule'},
      {path: 'bhcoList', loadChildren: '../../workspace/com-admin/bhco-list/bhco-list.module#BhcoListModule'},
      {path: 'memberList', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
      {path: 'assignMember', loadChildren: '../../workspace/com-admin/assign-member/assign-member.module#AssignMemberModule'},
      {path: 'unassignMember', loadChildren: '../../workspace/com-admin/unassign-list/unassign-list.module#UnassignListModule'},
      {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
      {path: 'edit-profile', loadChildren: '../../workspace/profile/edit-profile/edit-profile.module#EditProfileModule'},
      {path: 'create-block', loadChildren: '../../workspace/com-admin/create-block/create-block.module#CreateBlockModule'},
      {path: 'bhco-profile/:id', loadChildren: '../../workspace/sub-profile/sub-profile.module#SubProfileModule'},
      {path: 'member-profile/:id', loadChildren: '../../workspace/sub-profile/sub-profile.module#SubProfileModule'},
      {path: 'member-summary', loadChildren: '../../workspace/com-admin/member-summary/member-summary.module#MemberSummaryModule'},
      {path: 'member-detail/:id', loadChildren: '../../workspace/bhco/member-detail/member-detail.module#MemberDetailModule'},
      {path: 'demographic-ans', loadChildren: '../../workspace/bhco/demographic-ans/demographic-ans.module#DemographicAnsModule'},
      // {path: 'user-sessions', loadChildren: '../../workspace/bhco/session/session.moduleSessionModule'},
      //
    ]
  }
];
