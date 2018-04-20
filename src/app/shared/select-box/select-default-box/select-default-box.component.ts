import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroupDirective} from "@angular/forms";
import {SelectAttributes} from "../../shared-control/attributes";

@Component({
  selector: 'app-select-default-box',
  templateUrl: './select-default-box.component.html',
  styleUrls: ['./select-default-box.component.css']
})
export class SelectDefaultBoxComponent implements OnInit {

  @Input() attrContent : SelectAttributes;

  constructor(
    private formGroupDirective:FormGroupDirective,
  ) {

  }


  ngOnInit() {

  }


  get control(){
    return this.formGroupDirective.form.controls[this.attrContent.name]
  }

}
