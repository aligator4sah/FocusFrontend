import { Component, OnInit } from '@angular/core';
import {StateService} from "../../../../service/state.service";
import {QuestionModelService} from "../../../../service/question-model.service";

@Component({
  selector: 'app-questionnaire-ans',
  templateUrl: './questionnaire-ans.component.html',
  styleUrls: ['./questionnaire-ans.component.css']
})
export class QuestionnaireAnsComponent implements OnInit {
  categoryName: string = "questionnaire";
  member = JSON.parse(localStorage.getItem('curMem'));
  session = JSON.parse(localStorage.getItem('curSession'));

  domains: any[] = [];

  constructor(
    private stateService: StateService,
    private questionService: QuestionModelService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.existMember$.next(true);
    });
    this.getDomainTab();
  }

  getDomainTab() {
    this.questionService.getDomain().subscribe(value => this.domains = value);
  }
}




