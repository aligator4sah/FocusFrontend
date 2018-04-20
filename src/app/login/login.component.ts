import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }

  sysLogin() {
    this.router.navigateByUrl('sysLogin');
  }

  bhcoLogin() {
    this.router.navigateByUrl('bhcoLogin');
  }

  cmemberLogin() {
    this.router.navigateByUrl('cMemLogin')
  }


}
