import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from '../../../../model/questionBase';
import {QuestionControlService} from '../../../../shared/shared-control/question-control.service';
import {QuestionService} from '../../../../shared/shared-control/question.service';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent implements OnInit {
  // curMember = JSON.parse(localStorage.getItem('curMember'));

  questions: QuestionBase<any>[] = [];

  form: FormGroup;
  payLoad = '';

  constructor(private service: QuestionService,
              private qcs: QuestionControlService) {
   this.questions = service.getQuestions();
  }


  ngOnInit() {
    //this.loadQuestions(this.questionsServe);
    this.form = this.qcs.toFormGroup(this.questions);
    //this.questions = this.service.getDemoQues();
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }


}
