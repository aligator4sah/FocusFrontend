import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AnalysisComponent} from '../../workspace/sys-admin/analysis/analysis.component';
import {SysLevelComponent} from './sys-level.component';
import {LayoutModule} from '../../layout/layout.module';
import {routes} from './sys-level.route';
import {ControlBoxModule} from "../../../shared/shared-module/control-box.module";

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SysLevelComponent
  ],
  exports: [
    RouterModule,
    LayoutModule,
    SysLevelComponent
  ]
})
export class SysLevelModule { }
