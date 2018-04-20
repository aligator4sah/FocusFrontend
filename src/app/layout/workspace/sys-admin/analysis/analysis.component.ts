import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent{
  communities = ['Pittsburgh, PA', 'New York, NY', 'Santa Clara, CA', 'Los Angela, CA', 'Seattle, WA'];
  maptitle: string = 'Community Distribution On Map';
  lat: number = 40.4406;
  lng: number = -79.9959;
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Questionnaire'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Demographic'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Social Network'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = ['Questionnaire', 'Demographic', 'Social Network'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
