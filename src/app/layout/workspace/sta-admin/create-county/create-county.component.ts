import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {City, County} from "../../../../model/location";
import {States} from "../../../../shared/shared-control/attributes";
import {LocationService} from "../../../../service/location.service";
import 'rxjs/add/operator/debounceTime';

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
  countyName: string;
  countyArray: any[];

  isCountyCreated : boolean = false;
  isCityCreated: boolean = false;

  stateaAdmin = JSON.parse(localStorage.getItem('curUser'));

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
  ) { }

  ngOnInit() {
    this.buildCountyForm();
    this.buildCityForm();
    this.getCountyByState();
  }

  buildCountyForm() {
    this.countyGroup = this.fb.group({
      'state1': [this.stateaAdmin.location, Validators.required],
      'county1': ['', [Validators.required, Validators.minLength(3)]],
    });
    this.countyGroup.controls['county1'].valueChanges.debounceTime(300).subscribe(value => {
      this.countyName = value;
      this.getCountyByState();
    });
  }

  buildCityForm() {
    this.cityGroup = this.fb.group({
      'state2': [this.stateaAdmin.location , Validators.required],
      'county2': ['', Validators.required],
      'city': ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  getCountyByState() {
    this.countyArray = [];
    this.locationService.getCountyByState(this.stateaAdmin.location).subscribe(value => this.countyArray = value);
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
