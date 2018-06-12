import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StateService} from "../../../../service/state.service";
import {SocialAnswer} from "../../../../model/questionBase";
import {UserService} from "../../../../service/user.service";
import {DatePipe} from "@angular/common";
import {QuestionModelService} from "../../../../service/question-model.service";


@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit{
  //structure
  member = JSON.parse(localStorage.getItem('curMem'));
  blockId: any;
  form: FormGroup;
  social_question = SocialQuestion;
  answerGroup: any[] = [];
  socialAnswer: any[] = [];
  isSubmitted : boolean = false;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private userServie: UserService,
    private questionService: QuestionModelService,
    private datePipe: DatePipe,
    ) {
  }

  ngOnInit() {
    setTimeout(()=>
      this.stateService.existMember$.next(true)
    );
    //this.form = this.fb.group({});
    setTimeout(() => this.form = this.createSubforms());
    this.blockId = this.userServie.getMemberBlockId(this.member.id);
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
    this.socialAnswer = [];
    let sessionDate = this.datePipe.transform(Date.now(), "yyyy-MM-dd HH:mm");
    console.log(sessionDate);
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 5; j++) {
        let item = this.form.get([i, j]).value;
        if (item.firstName.length > 0) {
         let answer = {
           sessionId: sessionDate,
           questionId: i,
           userId: this.member.id,
           firstName: item.firstName,
           lastName: item.lastName,
           midName: item.midName,
           weight: item.number,
           relationshipId: item.relation,
           block: item.block == true ? this.blockId : -1,
         };
         this.socialAnswer.push(answer);
        }
        //console.log(item);
      }
    }
    console.log(this.socialAnswer);
    this.questionService.addSocialNetworkAns(this.socialAnswer).subscribe();
    this.isSubmitted = true;
  }

  goBack() {
    window.history.back();
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



