import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  editProfile() {
    this.router.navigateByUrl("/BhcoDashboard/editProfile");
  }

  resetPassword() {
    this.router.navigateByUrl("/BhcoDashboard/resetPassword")
  }

}
