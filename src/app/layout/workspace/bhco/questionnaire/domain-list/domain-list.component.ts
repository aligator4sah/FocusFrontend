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

  user = JSON.parse(localStorage.getItem('curUser'));
  member = JSON.parse(localStorage.getItem('curMem'));
  sessionInfo = localStorage.getItem('curSession');

  domains: Domain[];
  isBhco: boolean = false;

  constructor(
    private domService: QuestionModelService,
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.existMember$.next(true);
    });
    if (this.user.role === "bhco") {
      this.isBhco = true;
    }
    this.getDomains();
     console.log(this.sessionInfo);
  }

  getDomains() {
    this.domService.getDomain().subscribe(domain => {
      this.domains = domain;
    })
  }

  back() {
    if (this.user.role === "bhco") {
      this.router.navigateByUrl('/BhcoDashboard/session')
    } else if (this.user.role === "Community Member")  {
      this.router.navigateByUrl('/MemberDashboard/session');
    } else {
      this.router.navigateByUrl('/CommunityDashboard/user-session');
    }
  }
}
