import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public user = null;

  constructor() { }

  ngOnInit() {
    if (localStorage.length != 0) {
      this.user = JSON.parse(localStorage.getItem('curUser'));
      // console.log(this.user.name);
    }
  }

}
