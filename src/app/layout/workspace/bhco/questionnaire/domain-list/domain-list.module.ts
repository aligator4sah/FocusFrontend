import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainListComponent } from './domain-list.component';
import {SharedModuleModule} from "../../../../../shared/shared-module/shared-module.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild([
      {path: '', component: DomainListComponent}
    ])

  ],
  declarations: [DomainListComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    DomainListComponent
  ]
})
export class DomainListModule { }
