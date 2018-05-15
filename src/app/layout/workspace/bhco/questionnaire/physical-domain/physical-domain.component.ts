import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlService} from '../../../../../shared/shared-control/question-control.service';
import {Domain, QuestionBase, Questionnare, Subdomain} from '../../../../../model/questionBase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../../../../shared/shared-control/question.service';
import {ActivatedRoute} from "@angular/router";
import {QuestionModelService} from "../../../../../service/question-model.service";

@Component({
  selector: 'app-physical-domain',
  templateUrl: './physical-domain.component.html',
  styleUrls: ['./physical-domain.component.css']
})
export class PhysicalDomainComponent implements OnInit {
  //@Input() physicalQuestions: QuestionBase<any>[] = [];
  @Input() domain: Domain;
  member = JSON.parse(localStorage.getItem('curMem'));
  questions: any;

  subdomainList: Result[];
  form: FormGroup;
  formGroup: FormGroup[] = [];
  answerList: any[] = [];
  formItem: FormItem[] = [];


  health: QuestionBase<any>[] = [];
  drug: QuestionBase<any>[] = [];
  food: QuestionBase<any>[] = [];
  mobility: QuestionBase<any>[] = [];

  isLinear: true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;


  payLoad = '';

  constructor(
    private route: ActivatedRoute,
    private queService: QuestionModelService,
    private fb: FormBuilder,

    private service: QuestionService,
    private qcs: QuestionControlService,
    ) {

    this.food = service.getFoodq();
    this.drug = service.getDrugq();
    this.health = service.getHealthq();
    this.mobility = service.getMobilityq();
  }

  ngOnInit() {
    this.form = this.fb.group({});
    this.firstFormGroup = this.qcs.toFormGroup(this.health);
    this.secondFormGroup = this.qcs.toFormGroup(this.mobility);
    this.thirdFormGroup = this.qcs.toFormGroup(this.drug);
    this.forthFormGroup = this.qcs.toFormGroup(this.food);
    this.getQuestionByDom();
  }

  getQuestionByDom() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.queService.getQuesByDomain(id).subscribe(value => {
      this.questions = value;
      this.subdomainList = this.questions.resultSubDomains;
      this.toFormGroup(this.subdomainList);
      //console.log(this.form);
    });
  }

  // construct form group for domain
   toFormGroup(subdomList: Result[]) {
     let group: any = {};
     subdomList.forEach(sub => {
         let subForm = this.toFormQuesGroup(sub);
         group[sub.subdomain] = this.fb.group(subForm);
     });
     this.form = this.fb.group(group);
     //console.log(this.form.value);
    }

    // construct form group for subdomain
   toFormQuesGroup(questions: Result) {
      let ques = questions.questionnaire;
      let group: any = {};
     ques.forEach(que => {
       group[que.id] = [''];
       // const ans = new AnswerItem({
       //   questionid: que.id,
       // });
       // this.answerList.push(ans);
     });

     let subForm = this.fb.group(group);
     console.log(subForm.value);
     // this.answerList.forEach(ans => {
     //   subForm.controls[ans.id].valueChanges.subscribe(value => ans.answer = value);
     // });
     return subForm;
   }


  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}

export class Result {
  id: number;
  subdomain: string;
  isolate: boolean;
  questionnaire: Questionnare[];
}

export class FormItem {
  forms: FormGroup;
  questions: Questionnare[];
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

