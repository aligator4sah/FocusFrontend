import {Component, Input, OnInit} from '@angular/core';
import {RadioAttributes, SelectAttributes} from '../../shared-control/attributes';
import {FormGroupDirective} from '@angular/forms';
import {ValidationService} from '../../validation-service/validation.service';

@Component({
  selector: 'app-radio-control-box',
  templateUrl: './radio-control-box.component.html',
  styleUrls: ['./radio-control-box.component.css']
})
export class RadioControlBoxComponent implements OnInit {
  @Input() attrContent : RadioAttributes;

  constructor(
    private formGroupDirective:FormGroupDirective
  ) { }

  ngOnInit() {
    console.log(this.control);
  }
  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
      return null;
    }
  }

  get control(){
    return this.formGroupDirective.form.controls[this.attrContent.name];
  }

}
