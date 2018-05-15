import {Component, Input, OnInit} from '@angular/core';
import {Answer, Domain, Session} from '../../../../../model/questionBase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {QuestionModelService} from "../../../../../service/question-model.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-physical-domain',
  templateUrl: './physical-domain.component.html',
  styleUrls: ['./physical-domain.component.css']
})
export class PhysicalDomainComponent implements OnInit {
  @Input() domain: Domain;

  member = JSON.parse(localStorage.getItem('curMem'));
  curDom: string;
  questions: any;
  subdomainList: any[];
  form: FormGroup;
  answers: Answer[] = [];
  isLinear: true;
  payLoad = '';

  sessionDate = null;
  curDate = Date.now();
  returnValue: any;
  isSubmitted : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private queService: QuestionModelService,
    private fb: FormBuilder,
    private datePipe: DatePipe
    ) {}

  ngOnInit() {
    this.form = this.fb.group({});
    this.getQuestionByDom();
  }

  getQuestionByDom() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.queService.getQuesByDomain(id).subscribe(value => {
      this.questions = value;
      this.curDom = this.questions.selectedDomain.domain;
      this.subdomainList = this.questions.resultSubDomains;
      this.toFormGroup(this.subdomainList);
    });
  }

  // construct form group for domain
   toFormGroup(subdomList: any[]) {
     let group: any = {};
     subdomList.forEach(sub => {
         group[sub.subdomain] = this.toFormQuesGroup(sub);
     });
     this.form = this.fb.group(group);
    }

    // construct form group for subdomain
   toFormQuesGroup(questions: any) {
      let ques = questions.questionnaire;
      let group: any = {};
     ques.forEach(que => {
       group[que.id] = [''];
       //record the answers in an array with corresponding question id
       const ans = new Answer({qid: que.id});
       this.answers.push(ans);
     });
     let subForm = this.fb.group(group);
     //bind the answer array when form value get changed
     this.answers.forEach(ansItem => {
       subForm.controls[ansItem.qid].valueChanges.subscribe(value => ansItem.answer = value);
     });
     return subForm;
   }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.answers);
    this.sessionDate = this.datePipe.transform(this.curDate, "yyyy-MM-dd HH:mm a z':'+0900");
    const session = new Session({
      userid: this.member.id,
      answer: this.answers,
      createdate: this.sessionDate,
    });
    //post the value to the back end
    this.queService.addUserAnswer(session).subscribe(value => this.returnValue = value);
    this.isSubmitted = true;
  }
}

