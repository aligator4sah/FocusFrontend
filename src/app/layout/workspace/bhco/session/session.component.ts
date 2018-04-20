import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  public sessions = SESSION_DATA;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  newSession() {
    this.router.navigateByUrl("/BhcoDashboard/questionnaire")
  }

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

