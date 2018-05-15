import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { UserService} from "../../../../service/user.service";
import {Member} from "../../../../model/User";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

  // Doughnut
  public doughnutChartLabels:string[] = ['Finished', 'Unfinished'];
  public doughnutChartData:number[] = [14, 20];
  public doughnutChartType:string = 'doughnut';

  public pieChartLabels:string[] = ['Finished', 'Unfinished'];
  public pieChartData:number[] = [3, 3];
  public pieChartType:string = 'pie';

  // PolarArea
  public polarAreaChartLabels:string[] = ['Physical', 'Behavioral', 'Spiritual', 'Relation', 'SCIO-ECNOMIC'];
  public polarAreaChartData:number[] = [30, 25, 10, 40, 12];
  public polarAreaChartType:string = 'polarArea';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(
    private route: ActivatedRoute,
    private memService: UserService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getMemberId();
  }

  getMemberId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.memService.getMemberById(id)
      .subscribe(mem => {
        this.member = mem;
        const memberInfo = {'id': this.member.id, 'name': this.member.username, 'dob': this.member.date, 'gender': this.member.gender};
        localStorage.setItem('curMem', JSON.stringify(memberInfo));
      });
  }

 goBack() {
    this.location.back();
 }

 startDemo() {
    this.router.navigateByUrl('/BhcoDashboard/demographic')
 }

 startQues() {
    this.router.navigateByUrl('/BhcoDashboard/domain-list');
 }

 startSocial() {
    this.router.navigateByUrl('/BhcoDashboard/socialNetwork');
 }

}
