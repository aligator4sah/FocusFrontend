import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ComLevelComponent} from './com-level.component';
import {LayoutModule} from '../../layout/layout.module';
import {routes} from './com-level.route';
import {SharedModuleModule} from "../../../shared/shared-module/shared-module.module";

@NgModule({
  imports: [
    SharedModuleModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ComLevelComponent
  ],
  exports: [
    RouterModule,
    LayoutModule,
    ComLevelComponent
  ]
})
export class ComLevelModule { }
