import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {County} from "../../../../model/location";
import {States} from "../../../../shared/shared-control/attributes";
import {LocationService} from "../../../../service/location.service";

@Component({
  selector: 'app-create-county',
  templateUrl: './create-county.component.html',
  styleUrls: ['./create-county.component.css']
})
export class CreateCountyComponent implements OnInit {
  countyGroup: FormGroup;
  states = States;

  isCountyCreated : boolean = false;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
  ) { }

  ngOnInit() {
    this.buildCountyForm();
  }

  buildCountyForm() {
    this.countyGroup = this.fb.group({
      'state1': ['', Validators.required],
      'county1': ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submitCounty() {
    let county = new County({
      stateId: this.countyGroup.controls['state1'].value,
      county: this.countyGroup.controls['county1'].value,
    });
    console.log(county);
    //this.locationService.addCounty(county).subscribe();
    this.isCountyCreated = true;
    this.countyGroup.reset();

  }

}
