import { Injectable } from '@angular/core';
import {QuestionBase} from '../../model/questionBase';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class QuestionControlService {

  constructor(private fb: FormBuilder) { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    questions.forEach(question => {
      // group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
      //   : new FormControl(question.value || '');
      group[question.key] = [question.value, Validators.required];
    });
    return this.fb.group(group);
  }
}
