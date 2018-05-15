import { Component, OnInit } from '@angular/core';
import {QuestionModelService} from "../../../../../service/question-model.service";
import {Domain} from "../../../../../model/questionBase";
import {Router} from "@angular/router";


@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.css']
})
export class DomainListComponent implements OnInit {

  member = JSON.parse(localStorage.getItem('curMem'));
  domains: Domain[];

  constructor(
    private domService: QuestionModelService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.domService.getDomain().subscribe(domain => {
      this.domains = domain;
    })
  }

  back() {
    this.router.navigateByUrl('/member-detail');
  }


}
