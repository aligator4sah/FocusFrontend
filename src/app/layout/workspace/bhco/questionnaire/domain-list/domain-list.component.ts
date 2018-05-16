import { Component, OnInit } from '@angular/core';
import {QuestionModelService} from "../../../../../service/question-model.service";
import {Domain, Session} from "../../../../../model/questionBase";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.css']
})
export class DomainListComponent implements OnInit {

  member = JSON.parse(localStorage.getItem('curMem'));
  domains: Domain[];

  sessionInfo = localStorage.getItem('curSession');

  constructor(
    private domService: QuestionModelService,
  ) { }

  ngOnInit() {
    this.getDomains();
     console.log(this.sessionInfo);
  }

  getDomains() {
    this.domService.getDomain().subscribe(domain => {
      this.domains = domain;
    })
  }

  back() {
    window.history.back();
  }


}
