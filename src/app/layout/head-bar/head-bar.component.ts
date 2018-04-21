import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../shared/shared-control/question.service';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {

  ngOnInit() {
  }

  constructor(service: QuestionService) {
    // this.questions = service.getQuestions();
  }

}
