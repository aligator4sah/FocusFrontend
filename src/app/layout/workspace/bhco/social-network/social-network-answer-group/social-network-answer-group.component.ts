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
  relations = Relation;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(){

  }

}
