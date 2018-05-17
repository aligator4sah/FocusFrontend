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
  //public sessions = SESSION_DATA;
  sessions: any[];
  member = JSON.parse(localStorage.getItem('curMem'));

  constructor(
    private queService: QuestionModelService,
    private router: Router,
    private stateService: StateService,
  ) { }

  ngOnInit() {
    this.stateService.existMember$.next(true);
    localStorage.removeItem('curSession');
    this.getSessions();
  }

  getSessions() {
    this.queService.getSessionByUserId(this.member.id)
      .subscribe(value => this.sessions = value);
  }

  // TODO: subscibe the session list to the updated list after deletion
  deleteSession(sessionId: number) {
    this.queService.deleteSessionById(sessionId)
      .subscribe(value => this.sessions = value);
  }

  startSession(session: any) {
    localStorage.setItem('curSession', JSON.stringify(session));
    this.router.navigateByUrl('/BhcoDashboard/domain-list');
  }

  back() {
    this.router.navigateByUrl('/BhcoDashboard/detail/' + this.member.id);
  }



  // TODO: get the number of finished questions for each session

}

export interface session {
  sessionID: string,
  date: string,
  finished: number,
}

const SESSION_DATA: session[] = [
  {sessionID: "Session1", date: "2018-02-17", finished: 34},
  {sessionID: "Session2", date: "2018-01-22", finished: 52},
  {sessionID: "Session3", date: "2018-03-02", finished: 73},
]

