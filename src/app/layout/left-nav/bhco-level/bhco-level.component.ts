import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionService} from '../../../shared/shared-control/question.service';
import {Domain} from "../../../model/questionBase";
import {QuestionModelService} from "../../../service/question-model.service";
import {StateService} from "../../../service/state.service";

@Component({
  selector: 'app-bhco-level',
  templateUrl: './bhco-level.component.html',
  styleUrls: ['./bhco-level.component.css']
})
export class BhcoLevelComponent implements OnInit {

  domains: Domain[] = [];
  questions: any[];

  constructor(
    private service: QuestionService,
    private queService: QuestionModelService,
    public stateService:StateService
  ) {}

  ngOnInit() {
    this.getDomains();

  }



  getDomains() {
    this.queService.getDomain().subscribe(value => {
      this.domains = value;
    })
  }

  selectDom(dom: Domain) {
      localStorage.setItem('curDom', JSON.stringify(dom));
  }
}
