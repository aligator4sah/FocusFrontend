import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DropdownQuestion, QuestionBase, RadioQuestion, TextboxQuestion} from '../../../../../model/questionBase';
import {FormBuilder, FormControl, FormGroup, Validator} from '@angular/forms';
import {InputAttributes, RadioAttributes, SelectAttributes} from '../../../../../shared/shared-control/attributes';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-demo-question',
  templateUrl: './demo-question.component.html',
  styleUrls: ['./demo-question.component.css']
})
export class DemoQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  constructor(
    private fb: FormBuilder,
  ) {

    // this.form.controls["aaa"].valueChanges.subscribe(handler)
    // this.form.controls["bbb"].valueChanges.subscribe(handler)
  }

  ngOnInit() {
    console.log(typeof(this.question.key));
  }

}
