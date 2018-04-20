import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {StaLevelComponent} from './sta-level.component';
import {LayoutModule} from '../../layout/layout.module';
import {routes} from './sta-level.route';


@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StaLevelComponent
  ],
  exports: [
    RouterModule,
    LayoutModule,
    StaLevelComponent
  ]
})
export class StaLevelModule { }
