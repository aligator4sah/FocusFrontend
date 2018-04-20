import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../shared/shared-control/question.service';

@Component({
  selector: 'app-bhco-level',
  templateUrl: './bhco-level.component.html',
  styleUrls: ['./bhco-level.component.css']
})
export class BhcoLevelComponent implements OnInit {
  questions: any[];
  foodQuestion: any[];
  drugQuestion: any[];
  healthQuestion: any[];
  mobilityQuestion: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    this.foodQuestion = service.getFoodq();
    this.drugQuestion = service.getDrugq();
    this.healthQuestion = service.getHealthq();
    this.mobilityQuestion = service.getMobilityq();
  }

  ngOnInit() {
  }

}
