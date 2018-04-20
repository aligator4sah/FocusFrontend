import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionService} from '../../../../../shared/shared-control/question.service';
import {QuestionControlService} from '../../../../../shared/shared-control/question-control.service';
import {QuestionBase} from '../../../../../model/questionBase';

@Component({
  selector: 'app-behavioral-domain',
  templateUrl: './behavioral-domain.component.html',
  styleUrls: ['./behavioral-domain.component.css']
})
export class BehavioralDomainComponent implements OnInit {
  reaction: QuestionBase<any>[] = [];
  ace: QuestionBase<any>[] = [];
  food: QuestionBase<any>[] = [];
  mobility: QuestionBase<any>[] = [];


  isLinear: true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  form: FormGroup;
  payLoad = '';

  constructor(service: QuestionService, private qcs: QuestionControlService) {
    this.food = service.getFoodq();
    this.ace = service.getHealthq();
    this.reaction = service.getDrugq();
    //console.log(this.reaction);
    this.mobility = service.getMobilityq();
  }

  ngOnInit() {
    this.firstFormGroup = this.qcs.toFormGroup(this.reaction);
    this.secondFormGroup = this.qcs.toFormGroup(this.mobility);
    this.thirdFormGroup = this.qcs.toFormGroup(this.ace);
    this.forthFormGroup = this.qcs.toFormGroup(this.food);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }


}
