import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MemLevelComponent} from './mem-level.component';
import {LayoutModule} from '../../layout/layout.module';


export const routes = [
  {
    path: '',
    component: MemLevelComponent,
    children: [
      {path: '', redirectTo: 'socialNetwork', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      // {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic/demographic.module#DemographicModule'},
      {path: 'questionnaire', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'}

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
