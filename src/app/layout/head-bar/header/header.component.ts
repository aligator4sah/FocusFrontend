import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StateService} from "../../../service/state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: String;

  constructor(
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.profileRole$.subscribe(value => this.role = value);
  }

  logout() {
    this.router.navigateByUrl('login');
  }

  profile() {
    if (this.role === "System Administrator") {
      this.router.navigateByUrl('/SysDashboard/profile');
    } else if (this.role === "State Administrator") {
      this.router.navigateByUrl('/StateDashboard/profile');
    } else if (this.role === "Community Administrator") {
      this.router.navigateByUrl('/CommunityDashboard/profile');
    } else if (this.role === "Bhco") {
      this.router.navigateByUrl('/BhcoDashboard/profile');
    } else {
      this.router.navigateByUrl('/MemberDashboard/profile');
    }

  }
}
