import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SummaryService} from "../../../../service/summary.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-member-summary',
  templateUrl: './member-summary.component.html',
  styleUrls: ['./member-summary.component.css']
})
export class MemberSummaryComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //bar chart
  public barChartLabels:string[] = [];
  public barChartData:any[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  // Doughnut
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  public barChartColors:Array<any> = [
    {
      backgroundColor: '#A8E6CF',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },]

  adminLoc = JSON.parse(localStorage.getItem('curUser')).location;

  memberNum: number;
  blockNum: number;
  familyNum: number;

  selected: string = "Gender";
  selectForm: FormGroup;
  isBarChartLoading: boolean = false;
  isLoading : boolean = false;

  features = [
    'Gender',
    'Race',
    'Marry',
    'Education',
    'Employments',
  ];

  constructor(
    private summaryService: SummaryService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.selectForm = this.fb.group({
      select: ['']
    });
    this.getAgeDistribution();
    this.selectForm.controls['select'].valueChanges.subscribe(value => {
      this.selected = value;
      if (this.selected === "Gender") {
        this.getGenderRatio();
      } else if (this.selected === "Race") {
        this.getRaceRatio();
      } else if (this.selected === "Marry") {
        this.getMarryRatio();
      } else if (this.selected === "Education") {
        this.getEducationRatio();
      } else if (this.selected === "Employments") {
        this.getEmploymentRatio();
      }
    });

    this.summaryService.getMembersInCommunity(this.adminLoc).subscribe(value =>
      this.memberNum = value
    );
    this.summaryService.getBlocksInCommunity(this.adminLoc).subscribe(value =>
      this.blockNum = value
    );
    this.summaryService.getFamiliesInCommunity(this.adminLoc).subscribe(value =>
      this.familyNum = value
    );
  }

  getAgeDistribution() {
    let distribution: any;
    this.summaryService.getAgeDisInCom(this.adminLoc).subscribe(value => {
      distribution = value;
      distribution.forEach(val => {
        this.barChartLabels.push(val.type);
        this.barChartData.push(parseInt(val.count));
        if (this.barChartData.length === distribution.length && this.barChartLabels.length == distribution.length) {
          this.isBarChartLoading = true;
        }
      });
    });

  }

  getGenderRatio() {
    let genderDistribution: any;
    this.isLoading = false;
    this.summaryService.getGenderDisInCom(this.adminLoc).subscribe(value => {
      genderDistribution = value;
      this.doughnutChartLabels = [];
      this.doughnutChartData = [];
      genderDistribution.forEach(val => {
        this.doughnutChartLabels.push(val.gender);
        this.doughnutChartData.push(parseInt(val.count));
        if (this.doughnutChartLabels.length === genderDistribution.length) {
          this.isLoading = true;
        }
        console.log(this.doughnutChartLabels);
      });
      }
    );
  }

  getRaceRatio() {
    let ratio: any;
    this.isLoading = false;
    this.summaryService.getRaceDisInCom(this.adminLoc).subscribe(value => {
      ratio = value;
      this.doughnutChartLabels = [];
      this.doughnutChartData = [];
      ratio.forEach(val => {
        this.doughnutChartLabels.push(val.race);
        this.doughnutChartData.push(parseInt(val.count));
        if (this.doughnutChartLabels.length === ratio.length) {
          this.isLoading = true;
        }
      });
    });
  }

  getMarryRatio() {
    let ratio: any;
    this.isLoading = false;
    this.summaryService.getMarryDisInCom(this.adminLoc).subscribe(value => {
      ratio = value;
      this.doughnutChartLabels = [];
      this.doughnutChartData = [];
      ratio.forEach(val => {
        this.doughnutChartLabels.push(val.marry);
        this.doughnutChartData.push(parseInt(val.count));
        if (this.doughnutChartLabels.length === ratio.length) {
          this.isLoading = true;
        }
      });
    });
  }

  getEducationRatio() {
    let ratio: any;
    this.isLoading = false;
    this.summaryService.getEducationDisInCom(this.adminLoc).subscribe(value => {
      ratio = value;
      this.doughnutChartLabels = [];
      this.doughnutChartData = [];
      ratio.forEach(val => {
        this.doughnutChartLabels.push(val.education);
        this.doughnutChartData.push(parseInt(val.count));
        if (this.doughnutChartLabels.length === ratio.length) {
          this.isLoading = true;
        }
      });
    });
  }

  getEmploymentRatio() {
    let ratio: any;
    this.isLoading = false;
    this.summaryService.getEmploymentsInCom(this.adminLoc).subscribe(value => {
      ratio = value;
      this.doughnutChartLabels = [];
      this.doughnutChartData = [];
      ratio.forEach(val => {
        this.doughnutChartLabels.push(val.employments);
        this.doughnutChartData.push(parseInt(val.count));
        if (this.doughnutChartLabels.length === ratio.length) {
          this.isLoading = true;
        }
      });
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
