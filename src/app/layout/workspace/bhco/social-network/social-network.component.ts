import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SelectAttributes, InputAttributes, CheckAttributes, validationTool} from '../../../../shared/shared-control/attributes';
import { Relation} from '../../../../shared/shared-control/attributes';
import {SocialNetworkAnswerGroupComponent} from './social-network-answer-group/social-network-answer-group.component';
import {StateService} from "../../../../service/state.service";
import {SocialAnswer} from "../../../../model/questionBase";


@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(()=>
      this.stateService.existMember$.next(true)
    );

    //this.form = this.fb.group({});

    setTimeout(() => this.form = this.createSubforms());

  }



  //structure
  member = JSON.parse(localStorage.getItem('curMem'));

  form: FormGroup;
  social_question = SocialQuestion;
  answerGroup: any[] = [];


  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    ) {
  }

  ngOnInit() {


  }


  //generate six forms for each question
  createSubforms() {
    let group = {};
    this.social_question.forEach(form => {
      group[form.key] = this.createNestForm(form);
    });
    return this.fb.group(group);
  }

  //generate each column for six times in each subform
  createNestForm(form: any) {
    let group = {};
    this.createAnswerGroup(form).forEach(answerForm => {
      group[answerForm.order] = this.fb.group({
        number: [answerForm.order],
        firstName:[''],
        lastName:[''],
        midName:[''],
        relation:[''],
        block:['']
      });
    });
    return this.fb.group(group);
  }

  createAnswerGroup(form: any) {
    let answers: SocialAnswer[] = [];
    let time = 1;
    while (time < 6) {
      let answer = new SocialAnswer({
        order: time,
        userid: this.member.id,
      });
      answers.push(answer);
      time++;
    }
    form['answers'] = answers;
    this.answerGroup.push(answers);
    return answers;
    // console.log(this.answerGroup);
  }

  onSubmit() {
    console.log(this.form.value);

    //transform output data type to right format
  }
}


export const SocialQuestion = [
  {key: 1, value: "1.Who positively impacts your life the most?"},
  {key: 2, value: "2. Who do you spend most of your time with?"},
  {key: 3, value: "3. Who do you go for help?"},
  {key: 4, value: "4. Who typically inspires you?"},
  {key: 5, value: "5. Who do you get along with the best?"},
  {key: 6, value: "6. Who has the most negative influence on you?"},
];



