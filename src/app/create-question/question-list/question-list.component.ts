import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Questionnare, Subdomain} from "../../model/questionBase";
import {QuestionModelService} from "../../service/question-model.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  subdomain = JSON.parse(localStorage.getItem('curSub'));
  subdomId = parseInt(this.subdomain.id);
  subdomName = this.subdomain.subdomain;

  questions: Questionnare[];

  constructor(
    private questionService: QuestionModelService
  ) { }

  ngOnInit() {
    this.getQuestionsBySubdomain();
  }

  getQuestionsBySubdomain() {
    this.questionService.getQuestionBySubdomain(this.subdomId)
      .subscribe(ques => {this.questions = ques});
  }

  goback() {
    window.history.back();
  }
}
