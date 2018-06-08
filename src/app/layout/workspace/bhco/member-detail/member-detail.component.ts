import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import { UserService} from "../../../../service/user.service";
import {Member} from "../../../../model/User";
import {Session} from "../../../../model/questionBase";
import {QuestionModelService} from "../../../../service/question-model.service";
import {StateService} from "../../../../service/state.service";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit, OnDestroy {
  @Input() member: Member;

  curDate: any;
  curSession: any;

  user = JSON.parse(localStorage.getItem('curUser'));
  isNotBhco : boolean = true;

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
    private queService: QuestionModelService,
    private location: Location,
    private router: Router,
    private datePipe: DatePipe,
    private stateService:StateService
  ) { }

  ngOnInit() {
    if (this.user.role === "bhco") {
      this.isNotBhco = false;
    }
    this.getMemberId();
    localStorage.removeItem('curSession');
    setTimeout(() => {
      this.stateService.existMember$.next(true)
    });
  }



  ngOnDestroy(): void {
    this.stateService.existMember$.next(false)
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

 getCurDate() {
    let date = Date.now();
    return this.datePipe.transform(date, "yyyy-MM-dd HH:mm a z':'+0900")
 }

 startDemo() {
    this.router.navigateByUrl('/BhcoDashboard/demographic')
 }

 checkDemo() {
    if (this.user.role === 'bhco') {
      this.router.navigateByUrl('/BhcoDashboard/demographic-ans');
    } else {
      this.router.navigateByUrl('/CommunityDashboard/demographic-ans');
    }

 }

 startQues() {
    this.curDate = this.getCurDate();
    const session = new Session({
      userid: this.member.id,
      createdate: this.curDate
    });
    this.queService.addSession(session).subscribe(value => {
      this.curSession = value;
      // console.log(this.curSession);
      localStorage.setItem('curSession', JSON.stringify(this.curSession));
      this.router.navigateByUrl('/BhcoDashboard/domain-list');
    });
 }

 checkSession() {
    if (this.user.role === 'bhco') {
      this.router.navigateByUrl('/BhcoDashboard/session');
    } else {
      this.router.navigateByUrl('/CommunityDashboard/user-session')
    }
 }


 startSocial() {
    this.router.navigateByUrl('/BhcoDashboard/socialNetwork');
 }

}
