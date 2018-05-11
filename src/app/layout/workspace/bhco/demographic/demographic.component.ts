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
  curMember = JSON.parse(localStorage.getItem('curMem'));

  questions: QuestionBase<any>[] = [];
  answerArray: any[] = [];
  answer: string;

  form: FormGroup;
  payLoad = '';

  constructor(private service: QuestionService,
              private qcs: QuestionControlService) {
   //this.questions = service.getQuestions();
  }


  ngOnInit() {
    //this.loadQuestions(this.questionsServe);
    this.questions = this.service.getDemoQues();
    //this.questions = this.service.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.curMember);
    //this.getAnswers();
  }


  getAnswers() {
      for (let ques of this.questions) {
        this.form.controls[ques.key].valueChanges.subscribe(value => {
            let item = new AnswerItem({
              userid: this.curMember.id,
              questionid: parseInt(ques.key),
              answer: value,
            });
            this.answerArray.push(item);
            console.log(item);
          }
        );
      }
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    //console.log(this.answerArray);
  }

}


export class AnswerItem {
  userid: number;
  questionid: number;
  answer: string;
  constructor(options: {
    userid?: number,
    questionid?: number,
    answer?: string,
  } = {}) {
    this.userid = options.userid;
    this.questionid = options.questionid;
    this.answer = options.answer;
  }

}
