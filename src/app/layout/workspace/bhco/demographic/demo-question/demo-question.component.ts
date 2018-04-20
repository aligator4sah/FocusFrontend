import { Component, OnInit, Input } from '@angular/core';
import {DropdownQuestion, QuestionBase, RadioQuestion, TextboxQuestion} from '../../../../../model/questionBase';
import { FormGroup } from '@angular/forms';
import {InputAttributes, RadioAttributes, SelectAttributes} from '../../../../../shared/shared-control/attributes';

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

  ngOnInit() {
    console.log();
  }

  createInputAttr(): InputAttributes {
    return {
      name: this.question.key,
      min: 0,
      max: 50,
      placeholder: '',
      type: (<TextboxQuestion>this.question).type
    }
  }

  createSelectAttr():SelectAttributes{
    return {
      name: this.question.key,
      roles: (<DropdownQuestion>this.question).options,
      placeholder: ''
    }
  }

  createRadioAttr():RadioAttributes{
    return {
      name: this.question.key,
      options: (<RadioQuestion>this.question).options
    }
  }


}
