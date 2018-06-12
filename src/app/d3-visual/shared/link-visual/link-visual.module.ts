import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkVisualComponent } from './link-visual.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LinkVisualComponent],
  exports: [
    LinkVisualComponent,
  ]
})
export class LinkVisualModule { }
