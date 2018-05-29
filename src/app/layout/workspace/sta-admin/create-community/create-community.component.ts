import { Component, OnInit } from '@angular/core';
import { defaultAttributes, InputAttributes, role, roleNum,
  SelectAttributes
} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {City, Community, County} from "../../../../model/location";
import {LocationService} from "../../../../service/location.service";

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  //get current state admin and location id from local storage
  stateAdmin = JSON.parse(localStorage.getItem('curUser'));

  // form group declaration
  public communityGroup: FormGroup;

  // get county, city and community array from server
  counties: any[];
  cities: any[];
  communities: any[];

  //get the input value here and get the following data
  countyId: number;
  cityId: number;

  // disable the input box unless the data has been loaded
  loadCity: boolean = false;
  confirm: boolean = false;

  //input attributes declaration
  public defaultCity: SelectAttributes = {name: 'defaultCity', roles:[], placeholder:'City'};
  public defaultCom: defaultAttributes = {name: 'defaultyCom', type: 'text', placeholder:'Community', value:''};

  constructor(
    private fb: FormBuilder,
    private comService: LocationService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getCounties(this.stateAdmin.location);
  }

  buildForm(): void {
    this.communityGroup = this.fb.group({
      'county': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'community':['',[Validators.required,Validators.minLength(4)]]
    });

    this.communityGroup.controls['county'].valueChanges.subscribe(value => {
        this.countyId = value;
        this.getCities(this.countyId);
    });
    this.communityGroup.controls['city'].valueChanges.subscribe(value => {
        this.cityId = value;
        this.getCommunities(this.cityId);
    });

  }

  /** get county, city and community from server*/
  getCounties(stateId: number) {
    this.comService.getCountyByState(stateId)
      .subscribe(county => {
        this.counties = county;
      });
  }

  getCities(countyId: number) {
    this.comService.getCityByCounty(countyId)
        .subscribe(city => {
          this.cities = city;
          if (this.cities.length > 0) {
            this.loadCity = true;
          }});
  }

  getCommunities(cityId: number) {
     this.comService.getCommunityByCity(cityId)
        .subscribe(com => this.communities = com);
  }

  /**send add community request to the server */
  addCommunity() {
    const newCom = new Community({
      community: this.communityGroup.controls['community'].value,
      city: this.cityId,
    });

    this.comService.addCommunity(newCom)
       .subscribe(com => this.communities.push(com));
    console.log(newCom);

    this.confirm = true;
    //this.communityGroup.reset();
  }

  resetForm() {
    //this.communityGroup.reset();
  }

}
