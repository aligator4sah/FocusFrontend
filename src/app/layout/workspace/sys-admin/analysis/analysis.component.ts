import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SummaryService} from "../../../../service/summary.service";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit{
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

  //pie chart
  public lineChartLegend:boolean = true;
  public pieChartType:string = 'pie';
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];




  features = [
    'Gender',
    'Race',
    'Marry',
    'Education',
    'Employments',
    'Age',
  ];

  selected: string = "Gender";
  selectForm: FormGroup;

  memberNum: number;
  bhcoNum: number;
  stateNum: number;
  communityNum: number;
  cityNum: number;

  isPieChartLoading: boolean = false;

  stateList: any[] = [];
  cityList: any[] = [];


  constructor(private fb: FormBuilder,
              private summaryService: SummaryService
  ) {}

  ngOnInit() {
    this.getBhcoNum();
    this.getMemberNum();
    this.getMemberByState();
    this.getMemberByCity();
    this.getMemberByCommunity();

    this.selectForm = this.fb.group({
      select: []
    });
    this.selectForm.controls['select'].valueChanges.subscribe(value => {
      this.selected = value;
      if (this.selected === "Gender") {
        this.getMemberGender();
      } else if (this.selected === "Race") {
        this.getMemberRace();
      } else if (this.selected === "Marry") {
        this.getMemberMarry();
      } else if (this.selected === "Education") {
        this.getMemberEducation();
      } else if (this.selected === "Employments") {
        this.getMemberEmployments();
      } else {
        this.getMemberAge();
      }
    });
  }

  getMemberNum() {
    this.summaryService.getMemberNumSys().subscribe(value => this.memberNum = value)
  }

  getBhcoNum() {
    this.summaryService.getBhcoNumSys().subscribe(value => this.bhcoNum = value);
  }

  getMemberByState() {
    this.summaryService.getMemberGroupByState().subscribe(value => {
      this.stateList = value;
      this.stateNum = value.length;
    });
  }

  getMemberByCommunity() {
    this.summaryService.getMemberGroupByCommunity().subscribe(value => {
      this.communityNum = value.length;
    });
  }

  getMemberByCity() {
    this.summaryService.getMemberGroupByCity().subscribe(value => {
      this.cityList = value;
      this.cityNum = value.length;
    });
  }

  getMemberGender() {
    let ratio: any;
    this.isPieChartLoading = false;
    this.summaryService.getMemberGroupByGender().subscribe(value => {
      ratio = value;
      this.pieChartLabels = [];
      this.pieChartData = [];
      ratio.forEach(val => {
        this.pieChartLabels.push(val.gender);
        this.pieChartData.push(parseInt(val.count));
        if (this.pieChartData.length === ratio.length && this.pieChartLabels.length === ratio.length) {
          this.isPieChartLoading = true;
        }
      })
    });
  }

  getMemberRace() {
    let ratio: any;
    this.isPieChartLoading = false;
    this.summaryService.getMemberGroupByRace().subscribe(value => {
      ratio = value;
      this.pieChartLabels = [];
      this.pieChartData = [];
      ratio.forEach(val => {
        this.pieChartLabels.push(val.race);
        this.pieChartData.push(parseInt(val.count));
        if (this.pieChartData.length === ratio.length && this.pieChartLabels.length === ratio.length) {
          this.isPieChartLoading = true;
        }
      })
    });
  }

  getMemberMarry() {
    let ratio: any;
    this.isPieChartLoading = false;
    this.summaryService.getMemberGroupByMarry().subscribe(value => {
      ratio = value;
      this.pieChartLabels = [];
      this.pieChartData = [];
      ratio.forEach(val => {
        this.pieChartLabels.push(val.marry);
        this.pieChartData.push(parseInt(val.count));
        if (this.pieChartData.length === ratio.length && this.pieChartLabels.length === ratio.length) {
          this.isPieChartLoading = true;
        }
      })
    })
  }

  getMemberEducation() {
    let ratio: any;
    this.isPieChartLoading = false;
    this.summaryService.getMemberGroupByEducation().subscribe(value => {
      ratio = value;
      this.pieChartLabels = [];
      this.pieChartData = [];
      ratio.forEach(val => {
        this.pieChartLabels.push(val.education);
        this.pieChartData.push(parseInt(val.count));
        if (this.pieChartData.length === ratio.length && this.pieChartLabels.length === ratio.length) {
          this.isPieChartLoading = true;
        }
      })
    });
  }

  getMemberEmployments() {
    let ratio: any;
    this.isPieChartLoading = false;
    this.summaryService.getMemberGroupByEmployments().subscribe(value => {
      ratio = value;
      this.pieChartLabels = [];
      this.pieChartData = [];
      ratio.forEach(val => {
        this.pieChartLabels.push(val.employments);
        this.pieChartData.push(parseInt(val.count));
        if (this.pieChartData.length === ratio.length && this.pieChartLabels.length === ratio.length) {
          this.isPieChartLoading = true;
        }
      })
    });
  }

  getMemberAge() {
    let ratio: any;
    this.isPieChartLoading = false;
    this.summaryService.getMemberGroupByAge().subscribe(value => {
      ratio = value;
      this.pieChartLabels = [];
      this.pieChartData = [];
      ratio.forEach(val => {
        this.pieChartLabels.push(val.type);
        this.pieChartData.push(parseInt(val.count));
        if (this.pieChartData.length === ratio.length && this.pieChartLabels.length === ratio.length) {
          this.isPieChartLoading = true;
        }
      })
    });
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
