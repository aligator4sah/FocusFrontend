import { Component, OnInit } from '@angular/core';
import {QuestionModelService} from "../../../../service/question-model.service";
import {Router} from "@angular/router";
import {StateService} from "../../../../service/state.service";

@Component({
  selector: 'app-individual-analysis',
  templateUrl: './individual-analysis.component.html',
  styleUrls: ['./individual-analysis.component.css']
})
export class IndividualAnalysisComponent implements OnInit{

  member = JSON.parse(localStorage.getItem('curMem'));
  curSession = JSON.parse(localStorage.getItem('curSession')).id;
  scoreInfo: any;
  dataArray: number[] = [];

  /** bar chart definition*/
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [{data: this.dataArray, label: 'Individual'}];

  /**radar chart definition */
  public radarChartLabels:string[] = [];
  public radarChartType:string = 'radar';
  public radarChartData:any = [{data: this.dataArray, label: 'Individual'}];


  /** chart style and color definition**/
  public barChartColors:Array<any> = [
    { // dark grey
      backgroundColor: '#89C7B6',
      borderColor: '#89C7B6',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];

  public radarChartColors:Array<any> = [
    { // dark grey
      backgroundColor: '#FFD57E',
      borderColor: '#FFD57E',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];


  constructor(
    private queService: QuestionModelService,
    private router: Router,
    private stateService: StateService,
  ) {}

  ngOnInit() {
    setTimeout(() =>
      this.stateService.existMember$.next(true)
    );
    this.queService.getScore(this.curSession).subscribe(value => {
      this.scoreInfo = value;
      console.log(this.curSession);
      console.log(this.scoreInfo);
      this.createGraph();
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    let clone1 = JSON.parse(JSON.stringify(this.radarChartData));
    clone[0].data = data;
    clone1[0].data = data;
    this.barChartData = clone;
    this.radarChartData = clone1;
  }

  createGraph() {
    this.scoreInfo.forEach(score => {
      this.barChartLabels.push(score.domain);
      this.radarChartLabels.push(score.domain);
      this.dataArray.push(score.score);
    });
  }

  backList() {
    this.router.navigateByUrl('/BhcoDashboard/domain-list');
  }

}
