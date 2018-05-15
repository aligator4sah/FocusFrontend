import { Component, OnInit } from '@angular/core';
import {QuestionModelService} from "../../../../service/question-model.service";

@Component({
  selector: 'app-individual-analysis',
  templateUrl: './individual-analysis.component.html',
  styleUrls: ['./individual-analysis.component.css']
})
export class IndividualAnalysisComponent implements OnInit{


  curSession = JSON.parse(localStorage.getItem('curSession')).id;
  scoreInfo: any;

  constructor(private queService: QuestionModelService) {}

  ngOnInit() {
    this.queService.getScore(this.curSession).subscribe(value => {
      this.scoreInfo = value;
      console.log(this.scoreInfo);
    });
  }

  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
  };

  public barChartLabels:string[] = ['Physical', 'Behavioral', 'Relational', 'Spiritual', 'SOCIO-Economic', 'Overall'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Member A'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Community Average'}
  ];

  public radarChartLabels:string[] = ['Physical', 'Behavioral', 'Relational', 'Spiritual', 'SOCIO-Economic', 'Overall'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55], label: 'Member A'},
    {data: [28, 48, 40, 19, 96, 27], label: 'Community Average'}
  ];
  public radarChartType:string = 'radar';

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

}
