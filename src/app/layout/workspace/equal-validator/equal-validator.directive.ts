import {Directive, Input, OnInit} from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import {InputControlBoxComponent} from '../../../shared/input-box/input-control-box/input-control-box.component';

@Directive({
  selector: '[validateEqual]',
  providers: [ { provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true}]
})
export class EqualValidatorDirective implements OnInit{

  @Input()validateEqual: string;
  @Input()reverse: boolean;
  constructor(
    private inputControl:InputControlBoxComponent
  ) {

  }

  ngOnInit(){
    let control = this.inputControl.control
    setTimeout(()=>{
      control.setValidators([
        control.validator,
        (control)=>{
          let selfValue = control.value;

          // the value of current component, get the value from attribute
          let targetControl = control.parent.get(this.validateEqual);
          // if the value is not equal
          if (targetControl && selfValue !== targetControl.value ) {
            if(!this.reverse){
              return {
                validateEqual: false
              }
            }else{
              targetControl.setErrors({
                validateEqual: true
              })
            }
          }else{
            targetControl.setErrors(null);// value is equal return null
          }
          return null;
        }
      ])
    })
  }
}
