import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Question} from "../../../../model/questionBase";
import {QuestionModelService} from "../../../../service/question-model.service";
import {StateService} from "../../../../service/state.service";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessions: any[];
  member = JSON.parse(localStorage.getItem('curMem'));
  user = JSON.parse(localStorage.getItem('curUser'));

  constructor(
    private queService: QuestionModelService,
    private router: Router,
    private stateService: StateService,
  ) { }

  ngOnInit() {
    setTimeout(()=> {
      this.stateService.existMember$.next(true);
    });
    if (localStorage.getItem('curSession') != undefined) {
      localStorage.removeItem('curSession');
    }
    this.getSessions();
  }

  getSessions() {
    this.queService.getSessionByUserId(this.member.id)
      .subscribe(value => this.sessions = value);
  }

  deleteSession(sessionId: number) {
    this.sessions = this.sessions.filter(session => session.id !== sessionId);
    this.queService.deleteSessionById(sessionId).subscribe();
  }

  startSession(session: any) {
    localStorage.setItem('curSession', JSON.stringify(session));
    if (this.user.role === "bhco") {
      this.router.navigateByUrl('/BhcoDashboard/domain-list');
    } else if (this.user.role === "Community Administrator") {
      this.router.navigateByUrl('/CommunityDashboard/domain-list')
    }

  }

  back() {
    if (this.user.role === "bhco") {
      this.router.navigateByUrl('/BhcoDashboard/detail/' + this.member.id);
    } else if (this.user.role === "Community Administrator") {
      this.router.navigateByUrl('/CommunityDashboard/member-detail/' + this.member.id);
    }
  }

  // TODO: get the number of finished questions for each session

}

