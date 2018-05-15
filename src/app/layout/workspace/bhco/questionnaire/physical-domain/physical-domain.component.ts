import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlService} from '../../../../../shared/shared-control/question-control.service';
import {Domain, Question, QuestionBase, Questionnare, Subdomain} from '../../../../../model/questionBase';
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
  @Input() domain: Domain;
  member = JSON.parse(localStorage.getItem('curMem'));
  questions: any;

  subdomainList: QuestionItem[];
  form: FormGroup;
  formGroup: FormGroup[] = [];
  isLinear: true;

  payLoad = '';

  constructor(
    private route: ActivatedRoute,
    private queService: QuestionModelService,
    private fb: FormBuilder,
    ) {


  }

  ngOnInit() {
    this.form = this.fb.group({});
    this.getQuestionByDom();
  }

  getQuestionByDom() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.queService.getQuesByDomain(id).subscribe(value => {
      this.questions = value;
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
     });
     return this.fb.group(group);
   }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}


export class QuestionItem {
  id: number;
  subdomain: string;
  isolated: boolean;
  questionnaire: Question[];
}
