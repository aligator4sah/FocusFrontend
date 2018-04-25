import { Component, OnInit } from '@angular/core';
import { defaultAttributes, InputAttributes, role, roleNum,
  SelectAttributes
} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {City, Community, County} from "../../../../model/location";
import {LocationService} from "../../../../service/location.service";
import {CommunityAdmin, CurrentUser, StateAdmin} from "../../../../model/User";

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  //get current state admin and location id from local storage
  public stateAdmin = null;
  public locId = null;

  // form group declaration
  public communityGroup: FormGroup;

  // get county, city and community array from server
  counties: County[];
  cities: City[];
  communities: Community[];

  //pass county and city parameter to select boxes
  countyRole: roleNum[] = [];
  cityRole: roleNum[] = [];

  // disable the input box unless the data has been loaded
  loadCity: boolean = false;
  confirm: boolean = false;


  //input attributes declaration
  public selectCounty :SelectAttributes = {name:'county',roles:this.countyRole,placeholder:'County'};
  public selectCity: SelectAttributes = {name: 'city', roles:this.cityRole, placeholder:'City'};
  public inputCommunity : InputAttributes = {name:'community',min:4,max:32,placeholder:'Community',type:'text'};
  public defaultCity: SelectAttributes = {name: 'defaultCity', roles:{}, placeholder:'City'};
  public defaultCom: defaultAttributes = {name: 'defaultyCom', type: 'text', placeholder:'Community', value:''};

  //get the value from input box
  countyPara :number;
  cityPara: number;
  communityPara: string;

  constructor(
    private fb: FormBuilder,
    private comService: LocationService
  ) { }

  ngOnInit() {
    this.buildForm();

    if (localStorage.length != 0) {
      this.stateAdmin = JSON.parse(localStorage.getItem('curUser'));
      this.locId = this.stateAdmin.location;
    }
    this.getCounties();
  }

  buildForm(): void {
    this.communityGroup = this.fb.group({
      county: ['', [Validators.required]],
      city: ['', [Validators.required]],
      community:['',[Validators.required,Validators.minLength(4)]]
    })
  }


  /** get county, city and community from server*/
  getCounties() {
    this.comService.getCountyByState(this.locId)
      .subscribe(county => {
        this.counties = county;
        for (let coun of this.counties) {
          let counRole = new roleNum({value: coun.id, viewValue: coun.county});
          this.countyRole.push(counRole);
        }
      });
  }

  getCities() {
    if (this.countyPara != null) {
      this.comService.getCityByCounty(this.countyPara)
        .subscribe(city => {
          this.cities = city;
          for (let cit of this.cities) {
            let citRole = new roleNum({value: cit.id, viewValue: cit.city});
            this.cityRole.push(citRole);
            if (this.cityRole.length != 0) {
              this.loadCity = true;
            }
          }
        });
    }
  }

  getCommunities() {
    if (this.cityPara != null) {
      this.comService.getCommunityByCity(this.cityPara)
        .subscribe(com => this.communities = com);
    }
  }

  /** get value from input box and pass value to the server*/
  getCounty(value: number){
    if(value){
      this.countyPara = value;
      console.log("county:"+this.countyPara);
      this.getCities();
    }
  }

  getCity(value: number) {
    if (value) {
      this.cityPara = value;
      console.log("city"+this.cityPara);
      this.getCommunities();
    }
  }

  getCommunity(value:string){
    if(value){
      this.communityPara = value;
      console.log("username:"+this.communityPara);
    }
  }


  /**send add community request to the server */
  addCommunity() {
    const newCom = new Community({
      community: this.communityPara,
      city: this.cityPara,
    });

    this.comService.addCommunity(newCom)
      .subscribe(com => this.communities.push(com));
    console.log(newCom);

    this.confirm = true;
  }

}
