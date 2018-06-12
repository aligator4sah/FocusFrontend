import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeVisualComponent } from './node-visual.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NodeVisualComponent],
  exports: [
    NodeVisualComponent
  ]
})
export class NodeVisualModule { }
