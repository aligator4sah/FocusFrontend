import {Component, OnInit} from '@angular/core';
import {QuestionControlService} from '../../../../../shared/shared-control/question-control.service';
import {QuestionBase} from '../../../../../model/questionBase';
import {FormGroup} from '@angular/forms';
import {QuestionService} from '../../../../../shared/shared-control/question.service';

@Component({
  selector: 'app-physical-domain',
  templateUrl: './physical-domain.component.html',
  styleUrls: ['./physical-domain.component.css']
})
export class PhysicalDomainComponent implements OnInit {
  //@Input() physicalQuestions: QuestionBase<any>[] = [];

  health: QuestionBase<any>[] = [];
  drug: QuestionBase<any>[] = [];
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
    this.drug = service.getDrugq();
    this.health = service.getHealthq();
    this.mobility = service.getMobilityq();
  }

  ngOnInit() {
    this.firstFormGroup = this.qcs.toFormGroup(this.health);
    this.secondFormGroup = this.qcs.toFormGroup(this.mobility);
    this.thirdFormGroup = this.qcs.toFormGroup(this.drug);
    this.forthFormGroup = this.qcs.toFormGroup(this.food);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
