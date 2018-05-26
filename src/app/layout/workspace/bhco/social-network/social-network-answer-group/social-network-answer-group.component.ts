import { Component, Input, OnInit } from '@angular/core';
import { SelectAttributes, InputAttributes, CheckAttributes, validationTool,Relation } from '../../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SocialAnswer} from "../../../../../model/questionBase";
@Component({
  selector: 'app-social-network-answer-group',
  templateUrl: './social-network-answer-group.component.html',
  styleUrls: ['./social-network-answer-group.component.css']
})
export class SocialNetworkAnswerGroupComponent implements OnInit {
  @Input() subform: FormGroup;
  @Input() question: any;

  member = JSON.parse(localStorage.getItem('curMem'));
  answerGroup: SocialAnswer[] = [];

  // public tempFormGroup: FormGroup;

  public inputNumber: InputAttributes = {name:'number',min:1,max:5,placeholder:'order',type:'number'};
  public inputFirstName: InputAttributes = {name:'firstName',min:2,max:32,placeholder:'first name',type:'text'};
  public inputLastName: InputAttributes = {name:'lastName',min:2,max:32,placeholder:'last name',type:'text'};
  public inputMidName: InputAttributes= {name:'midName',min:0,max:32,placeholder:'Middle/Suffix',type:'text'};
  public selectRelation: SelectAttributes={name:'relation',roles:Relation,placeholder:'relationship'};
  public checkBlock: CheckAttributes = {name:'block',placeholder:'same block'};

  //inputNumebr1: number;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(){
    // for (let item of this.question.answers) {
    //   console.log(this.subform.controls[item.order]);
    // }
    //console.log(this.question.answers)
    //this.createAnswerGroup();
    //this.buildForm();
    //this.createForm();
    //console.log(this.subform.controls[1]);
    //setTimeout(() => this.createForm());
  }

  // buildForm(): void {
  //   this.tempFormGroup = this.fb.group({
  //     number: ['', [Validators.required]],
  //     firstName:['',[ Validators.required,Validators.minLength(4)]],
  //     lastName:['',[Validators.required,Validators.minLength(2)]],
  //     midName:['',[Validators.required]],
  //     relation:['',[Validators.required]],
  //     block:['',[Validators.requiredTrue]]
  //   });
  //   console.log("build form already");
  // }

  createForm() {
    let group = {};
    this.createAnswerGroup();
    this.answerGroup.forEach(answerForm => {
      group[answerForm.order] = this.fb.group({
        number: [answerForm.order],
        firstName:[''],
        lastName:[''],
        midName:[''],
        relation:[''],
        block:['']
      });
    });
    this.subform = this.fb.group(group);
    //console.log(this.subform);
  }


  createAnswerGroup() {
    let time = 1;
    while (time < 6) {
      let answer = new SocialAnswer({
        order: time,
        userid: this.member.id,
      });
      this.answerGroup.push(answer);
      time++;
    }
  }
}
