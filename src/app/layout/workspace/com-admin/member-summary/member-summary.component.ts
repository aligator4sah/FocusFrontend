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

  user = JSON.parse(localStorage.getItem('curUser'));

  memberNum: number;
  blockNum: number;
  familyNum: number;

  selected: string = "Gender";
  selectForm: FormGroup;
  isBarChartLoading: boolean = false;
  isLoading : boolean = false;
  isCommunityAdmin: boolean = false;

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

    if (this.user.role === "Community Administrator") {
      this.isCommunityAdmin = true;
      this.summaryService.getMembersInCommunity(this.user.location).subscribe(value =>
        this.memberNum = value);
      this.summaryService.getBlocksInCommunity(this.user.location).subscribe(value =>
        this.blockNum = value);
      this.summaryService.getFamiliesInCommunity(this.user.location).subscribe(value =>
        this.familyNum = value);
    } else {
      this.summaryService.getMemberNumberBhco(this.user.id).subscribe(value =>
      this.memberNum = value);
    }

  }

  getAgeDistribution() {
    let distribution: any;
    if (this.user.role === "Community Administrator") {
      this.summaryService.getAgeDisInCom(this.user.location).subscribe(value => {
        distribution = value;
        distribution.forEach(val => {
          this.barChartLabels.push(val.type);
          this.barChartData.push(parseInt(val.count));
          if (this.barChartData.length === distribution.length && this.barChartLabels.length == distribution.length) {
            this.isBarChartLoading = true;
          }
        });
      });
    } else {
      this.summaryService.getMemberAgeBhco(this.user.id).subscribe(value => {
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
  }

  getGenderRatio() {
    let genderDistribution: any;
    this.isLoading = false;
    if (this.user.role === "Community Administrator") {
      this.summaryService.getGenderDisInCom(this.user.location).subscribe(value => {
        genderDistribution = value;
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        genderDistribution.forEach(val => {
          this.doughnutChartLabels.push(val.gender);
          this.doughnutChartData.push(parseInt(val.count));
          if (this.doughnutChartLabels.length === genderDistribution.length) {
            this.isLoading = true;
          }
        });
      });
    } else {
      this.summaryService.getMemberGenderBhco(this.user.id).subscribe(value => {
        genderDistribution = value;
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        genderDistribution.forEach(val => {
          this.doughnutChartLabels.push(val.gender);
          this.doughnutChartData.push(parseInt(val.count));
          if (this.doughnutChartLabels.length === genderDistribution.length) {
            this.isLoading = true;
          }
        });
      });
    }

  }

  getRaceRatio() {
    let ratio: any;
    this.isLoading = false;
    if (this.user.role === "Community Administrator") {
      this.summaryService.getRaceDisInCom(this.user.location).subscribe(value => {
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
    } else {
      this.summaryService.getMemberRaceBhco(this.user.id).subscribe(value => {
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

  }

  getMarryRatio() {
    let ratio: any;
    this.isLoading = false;
    if (this.user.role === "Community Administrator") {
      this.summaryService.getMarryDisInCom(this.user.location).subscribe(value => {
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
    } else {
      this.summaryService.getMemberMarrayBhco(this.user.id).subscribe(value => {
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

  }

  getEducationRatio() {
    let ratio: any;
    this.isLoading = false;
    if (this.user.role === "Community Administrator") {
      this.summaryService.getEducationDisInCom(this.user.location).subscribe(value => {
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
    } else {
      this.summaryService.getMemberEducationBhco(this.user.id).subscribe(value => {
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

  }

  getEmploymentRatio() {
    let ratio: any;
    this.isLoading = false;
    if (this.user.role === "Community Administrator") {
      this.summaryService.getEmploymentsInCom(this.user.location).subscribe(value => {
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
    } else {
      this.summaryService.getMemberEmployementsBhco(this.user.id).subscribe(value => {
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

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
