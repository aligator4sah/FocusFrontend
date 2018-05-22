import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DemoQuestion, QuestionBase} from '../../../../model/questionBase';
import {QuestionControlService} from '../../../../shared/shared-control/question-control.service';
import {QuestionService} from '../../../../shared/shared-control/question.service';
import {QuestionModelService} from "../../../../service/question-model.service";
import {Router} from "@angular/router";
import {StateService} from "../../../../service/state.service";

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent implements OnInit {
  curMember = JSON.parse(localStorage.getItem('curMem'));

  /**Initialize the question and questionn form */
  questions: DemoQuestion[] = [];
  form: FormGroup;

  answers: AnswerItem[] = [];
  answer: string;
  isSubmitted: any;
  payLoad = '';
  isUpload : boolean = false;

  constructor(
    private queService: QuestionModelService,
    private fb: FormBuilder,
    private router: Router,
    private stateService: StateService,
  ) {}


  ngOnInit() {
      this.getDemoQuestions();
      setTimeout(() => {
        this.stateService.existMember$.next(true);
      });
      this.form = this.fb.group({});
  }

  getDemoQuestions() {
    this.queService.getDemoQsuestions().subscribe(ques => {
      this.questions = ques;
      let group: any = {};
      this.questions.forEach(ques => {
        group[ques.id] = ['', Validators.required];
        const ans = new AnswerItem({
          userid: this.curMember.id,
          questionid: ques.id,
        });
        this.answers.push(ans);
      });
      this.form = this.fb.group(group);
      this.answers.forEach(ans => {
        this.form.controls[ans.questionid].valueChanges.subscribe(value => ans.answer = value);
      })
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    // console.log(this.answers);
    //console.log(this.answerArray);
    this.queService.addUserDemo(this.answers).subscribe(value => {
        this.isSubmitted = value;
      }
    );

    this.isUpload = true;
  }

  back() {
   this.router.navigateByUrl('/BhcoDashboard/detail/'+this.curMember.id);
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
    this.userid = options.userid || 0;
    this.questionid = options.questionid || 0;
    this.answer = options.answer || '';
  }

}
