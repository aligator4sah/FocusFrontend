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
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];

  public barChartColors:Array<any> = [
    {
      backgroundColor: '#A8E6CF',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },]

  // Doughnut
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  adminLoc = JSON.parse(localStorage.getItem('curUser')).location;

  memberNum: number;
  blockNum: number;
  familyNum: number;

  selected: string = "Gender";
  selectForm: FormGroup;
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

}
