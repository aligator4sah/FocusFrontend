import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {City, County} from "../../../../model/location";
import {States} from "../../../../shared/shared-control/attributes";
import {LocationService} from "../../../../service/location.service";

@Component({
  selector: 'app-create-county',
  templateUrl: './create-county.component.html',
  styleUrls: ['./create-county.component.css']
})
export class CreateCountyComponent implements OnInit {
  countyGroup: FormGroup;
  cityGroup: FormGroup;

  states = States;
  stateId: number;
  countyArray: any[];

  isCountyCreated : boolean = false;
  isCityCreated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
  ) { }

  ngOnInit() {
    this.buildCountyForm();
    this.buildCityForm();
  }


  //TODO: change select state to default state id after state admin login
  buildCountyForm() {
    this.countyGroup = this.fb.group({
      'state1': ['', Validators.required],
      'county1': ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  //TODO: delete select state later
  buildCityForm() {
    this.cityGroup = this.fb.group({
      'state2': ['', Validators.required],
      'county2': ['', Validators.required],
      'city': ['', [Validators.required, Validators.minLength(3)]],
    });
    this.cityGroup.controls['state2'].valueChanges.subscribe(value => {
      this.stateId = value;
      this.getCountyByState(this.stateId);
    });
  }

  getCountyByState(stateId: number) {
    this.countyArray = [];
    this.locationService.getCountyByState(stateId).subscribe(value => this.countyArray = value);
  }

  submitCounty() {
    let county = new County({
      state: this.countyGroup.controls['state1'].value,
      county: this.countyGroup.controls['county1'].value,
    });
    this.locationService.addCounty(county).subscribe();
    this.isCountyCreated = true;
    this.countyGroup.reset();
  }

  submitCity() {
    let city = new City({
      city: this.cityGroup.controls['city'].value,
      county: this.cityGroup.controls['county2'].value,
    });
    this.locationService.addCity(city).subscribe();
    console.log(city);
    this.isCityCreated = true;
    this.cityGroup.reset();

  }

}
