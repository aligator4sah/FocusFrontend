import { Component, OnInit } from '@angular/core';
import {StateService} from "../../../../service/state.service";

@Component({
  selector: 'app-demographic-ans',
  templateUrl: './demographic-ans.component.html',
  styleUrls: ['./demographic-ans.component.css']
})
export class DemographicAnsComponent implements OnInit {

  member = JSON.parse(localStorage.getItem('curMem'));

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.existMember$.next(true);
    })
  }

}
