import { Component, OnInit } from '@angular/core';
import {QuestionModelService} from "../../../../../service/question-model.service";
import {Domain, Session} from "../../../../../model/questionBase";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {StateService} from "../../../../../service/state.service";


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
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.stateService.existMember$.next(true);
    this.getDomains();
     console.log(this.sessionInfo);
  }

  getDomains() {
    this.domService.getDomain().subscribe(domain => {
      this.domains = domain;
    })
  }

  back() {
    this.router.navigateByUrl('/BhcoDashboard/session')
  }


}
