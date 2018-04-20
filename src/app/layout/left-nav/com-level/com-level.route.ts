import {ComLevelComponent} from './com-level.component';
import {CreateBlockModule} from '../../workspace/com-admin/create-block/create-block.module';

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
      {path: 'create-block', loadChildren: '../../workspace/com-admin/create-block/create-block.module#CreateBlockModule'}
    ]
  }
];
