import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from "../../../service/state.service";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  role: String;
  user = JSON.parse(localStorage.getItem('curUser'));
  profile: any;

  constructor(
    private router : Router,
    private stateService: StateService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.stateService.profileRole$.subscribe(value => {
      this.role = value;
      if (this.role === "System Administrator") {
        this.getSystemAdmin();
      } else if (this.role === "State Administrator") {
        this.getStateAdmin();
      } else if (this.role === "Community Administrator") {
        this.getCommunityAdmin();
      } else if (this.role === "Bhco") {
        this.getBhco();
      } else {
        this.getCommunityMember();
      }
    });
  }

  getSystemAdmin() {
    this.userService.getSystemAdminById(this.user.id).subscribe(value => this.profile = value);
  }

  getStateAdmin() {
    this.userService.getStateAdminById(this.user.id).subscribe(value => this.profile = value);
  }

  getCommunityAdmin() {
    this.userService.getCommunityAdminById(this.user.id).subscribe(value => this.profile = value);
  }

  getBhco() {
    this.userService.getBhcoById(this.user.id).subscribe(value => this.profile = value);
  }

  getCommunityMember() {
    this.userService.getMemberById(this.user.id).subscribe(value => this.profile = value);
  }

  editProfile() {
    if (this.role === "System Administrator") {
      this.router.navigateByUrl('/SysDashboard/edit-profile')
    } else if (this.role === "State Administrator") {
      this.router.navigateByUrl('/StateDashboard/edit-profile')
    } else if (this.role === "Community Administrator") {
      this.router.navigateByUrl('/CommunityDashboard/edit-profile')
    } else if (this.role === "Bhco") {
      this.router.navigateByUrl('/BhcoDashboard/edit-profile')
    } else {
      this.router.navigateByUrl('/MemberDashboard/edit-profile');
    }
  }

  goBack() {
    window.history.back();
  }

}
