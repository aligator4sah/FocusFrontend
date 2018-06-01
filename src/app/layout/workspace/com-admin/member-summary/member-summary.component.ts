import { Component, OnInit } from '@angular/core';
import {SummaryService} from "../../../../service/summary.service";

@Component({
  selector: 'app-member-summary',
  templateUrl: './member-summary.component.html',
  styleUrls: ['./member-summary.component.css']
})
export class MemberSummaryComponent implements OnInit {

  adminLoc = JSON.parse(localStorage.getItem('curUser')).location;

  memberNum: number;
  blockNum: number;
  familyNum: number;

  constructor(
    private summaryService: SummaryService
  ) { }

  ngOnInit() {
    this.summaryService.getMembersInCommunity(this.adminLoc).subscribe(value =>
      this.memberNum = value
    );
    this.summaryService.getBlocksInCommunity(this.adminLoc).subscribe(value =>
      this.blockNum = value
    );
    this.summaryService.getFamiliesInCommunity(this.adminLoc).subscribe(value =>
      this.familyNum = value
    )
  }



}
