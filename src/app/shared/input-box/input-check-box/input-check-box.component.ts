import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CheckAttributes } from '../../shared-control/attributes';

@Component({
  selector: 'app-input-check-box',
  templateUrl: './input-check-box.component.html',
  styleUrls: ['./input-check-box.component.css']
})
export class InputCheckBoxComponent implements OnInit {
  @Input() attrContent : CheckAttributes;
  @Output()  follow = new EventEmitter<string>();
  //private formGroupDirective:FormGroupDirective;
  constructor() { }

  ngOnInit() {
    // this.valueChange()
    //  console.log(this.formGroupDirective);
  }

  // valueChange(){
  //   this.control.valueChanges.forEach(
  //     (value:string) => {
  //       this.follow.emit(value);
  //       //console.log(value);
  //     }
  //   );
  // }
  // get control(){
  //   return this.formGroupDirective.form.controls[this.attrContent.name];
  // }
}
