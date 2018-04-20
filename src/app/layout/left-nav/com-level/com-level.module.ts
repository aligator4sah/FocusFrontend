import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ComLevelComponent} from './com-level.component';
import {LayoutModule} from '../../layout/layout.module';
import {routes} from './com-level.route';

@NgModule({
  imports: [
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
