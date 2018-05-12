import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {
  DemoQuestion, DropdownQuestion, Question, QuestionBase, RadioQuestion,
  TextboxQuestion
} from '../../../../../model/questionBase';
import {FormBuilder, FormControl, FormGroup, Validator} from '@angular/forms';
import {InputAttributes, RadioAttributes, SelectAttributes} from '../../../../../shared/shared-control/attributes';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-demo-question',
  templateUrl: './demo-question.component.html',
  styleUrls: ['./demo-question.component.css']
})
export class DemoQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.id].valid;
  }

  constructor() {}

  ngOnInit() {
    console.log(this.question.id);
  }

}
