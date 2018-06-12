import {Directive, ElementRef, Input} from '@angular/core';
import {D3Service} from "../d3.service";

@Directive({
  selector: '[appZoomable]'
})
export class ZoomableDirective {

  @Input('appZoomable') zoomableOf: ElementRef;

  constructor(private d3Service: D3Service,
              private _element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
  }

}
