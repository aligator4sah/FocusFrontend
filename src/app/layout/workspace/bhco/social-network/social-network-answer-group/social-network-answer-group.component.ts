import { Component, Input, OnInit } from '@angular/core';
import { SelectAttributes, InputAttributes, CheckAttributes, validationTool,Relation } from '../../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-social-network-answer-group',
  templateUrl: './social-network-answer-group.component.html',
  styleUrls: ['./social-network-answer-group.component.css']
})
export class SocialNetworkAnswerGroupComponent implements OnInit {
  @Input() attrContents : validationTool;

  public tempFormGroup: FormGroup;

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
    this.buildForm();
  }

  buildForm(): void {
    this.tempFormGroup = this.fb.group({
      number: ['', [Validators.required]],
      firstName:['',[ Validators.required,Validators.minLength(4)]],
      lastName:['',[Validators.required,Validators.minLength(2)]],
      midName:['',[Validators.required]],
      relation:['',[Validators.required]],
      block:['',[Validators.requiredTrue]]
    });
    console.log("build form already");
  }

}
