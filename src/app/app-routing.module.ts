import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ForgotPwdComponent} from './login/forgot-pwd/forgot-pwd.component';
import {LoginComponent} from './login/login.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sysLogin',
    loadChildren: './login/sys-login/sys-login.module#SysLoginModule'
  },
  {
    path: 'bhcoLogin',
    loadChildren: "./login/non-sys-login/bhco-login/bhco-login.module#BhcoLoginModule"
  },
  {
    path: 'cMemLogin',
    loadChildren: "./login/non-sys-login/member-login/member-login.module#MemberLoginModule"
  },
  {
    path: 'forgotPwd',
    component: ForgotPwdComponent
  },
  {
    path: 'SysDashboard',
    loadChildren: './layout/left-nav/sys-level/sys-level.module#SysLevelModule'
  },
  {
    path: 'StateDashboard',
    loadChildren: './layout/left-nav/sta-level/sta-level.module#StaLevelModule'
  },
  {
    path: 'CommunityDashboard',
    loadChildren: './layout/left-nav/com-level/com-level.module#ComLevelModule'
  },
  {
    path: 'BhcoDashboard',
    loadChildren: './layout/left-nav/bhco-level/bhco.module#BhcoModule'
  },
  {
    path: 'MemberDashboard',
    loadChildren: './layout/left-nav/mem-level/mem-level.module#MemLevelModule'
  },
  {
    path: 'createQuestion',
    loadChildren: './create-question/create-question.module#CreateQuestionModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
