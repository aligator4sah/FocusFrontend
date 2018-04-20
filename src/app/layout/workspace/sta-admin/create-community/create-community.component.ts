import { Component, OnInit } from '@angular/core';
import {Block, InputAttributes, role, roleNum, SelectAttributes} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {City, Community, County} from "../../../../model/location";
import {LocationService} from "../../../../service/location.service";
import {CommunityAdmin} from "../../../../model/User";

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  public communityGroup: FormGroup;
  public blocks = Block;

  counties: County[];
  citiies: City[];
  communities: Community[];

  countyRole: roleNum[] = [];
  cityRole: roleNum[] = [];

  confirm: boolean = false;


  public selectCounty :SelectAttributes = {name:'county',roles:this.countyRole,placeholder:'County'};
  public selectCity: SelectAttributes = {name: 'city', roles:this.cityRole, placeholder:'City'};
  public inputCommunity : InputAttributes = {name:'community',min:4,max:32,placeholder:'community',type:'text'};

  countyPara :number;
  cityPara: number;
  communityPara: string;

  constructor(
    private fb: FormBuilder,
    private comService: LocationService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getCounties();
  }

  buildForm(): void {
    this.communityGroup = this.fb.group({
      county: ['', [Validators.required]],
      city: ['', [Validators.required]],
      community:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  getCounties() {
    this.comService.getAllCounty()
      .subscribe(county => {
        this.counties = county;
        for (let coun of this.counties) {
          let counRole = new roleNum({value: coun.id, viewValue: coun.county});
          this.countyRole.push(counRole);
        }
      });
  }

  getCities() {
    this.comService.getAllCity()
      .subscribe(city => {
        this.citiies = city;
        for (let cit of this.citiies) {
          let citRole = new roleNum({value: cit.id, viewValue: cit.city});
          this.cityRole.push(citRole);
        }
      });
  }

  getCommunities() {
    this.comService.getAllCommunity()
      .subscribe(com => this.communities = com);
  }

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



  addCommunity() {
    const newCom = new Community({
      community: this.communityPara,
      cityId: this.cityPara,
    });

    this.comService.addCommunity(newCom)
      .subscribe(com => this.communities.push(com));
    console.log(newCom);

    this.confirm = true;
  }

}

export class family {
  block: string;
  familyName: string;
}
