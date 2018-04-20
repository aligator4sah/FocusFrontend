import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl('login');
  }
  profile() {
    this.router.navigateByUrl('/BhcoDashboard/profile');
  }
}
