import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {defaultAttributes, role, roleNum, SelectAttributes} from '../../../../shared/shared-control/attributes';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import { States } from '../../../../shared/shared-control/attributes';
import {UserService} from "../../../../service/user.service";
import {Bhcos, CommunityAdmin} from "../../../../model/User";
import {City, Community, County} from "../../../../model/location";
import {LocationService} from "../../../../service/location.service";


@Component({
  selector: 'app-create-com',
  templateUrl: './create-com.component.html',
  styleUrls: ['./create-com.component.css']
})
export class CreateComComponent implements OnInit {

  counties: County[];
  cities: City[];
  communities: Community[];

  countyRole: roleNum[] = [];
  cityRole: roleNum[] = [];
  communityRole: roleNum[] = [];

  public stateAdmin = null;
  public locId = null;

  //state import
  public states = States;
  //default value of stepper
  public isLinear = true;
  //initialize the formGroup
  public userForm: FormGroup;
  public communityGroup: FormGroup;
  //validator para
  public defaultState: defaultAttributes = {name:'dState',value:'Pennsylvania',type:'text',placeholder:'state'};
  //public selectStates : SelectAttributes = {name:'state',roles:this.states,placeholder:'state'};
  public selectCounty: SelectAttributes = {name:'county',roles:this.countyRole,placeholder:'county'};
  public selectCity: SelectAttributes = {name:'city',roles:this.cityRole,placeholder:'city'};
  public selectCommunity: SelectAttributes = {name:'community',roles:this.communityRole,placeholder:'community'};
  public userName : InputAttributes = {name:'username',min:4,max:32,placeholder:'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};

  public userFirstName : InputAttributes = {name:'firstName', min: 4, max:32, placeholder:'First Name', type: 'text'};
  public userLastName: InputAttributes = {name: 'lastName', min: 4, max: 32, placeholder: 'Last Name', type: 'text'};
  public userPhone: InputAttributes = {name: 'phone', min:8, max: 10, placeholder:'Phone', type:'text'};
  public userEmail: InputAttributes = {name: 'email', min: 8, max: 16, placeholder: 'Email', type: 'text'};


  public defaultCity: SelectAttributes = {name: 'defaultCity', placeholder:'City', roles: {}};
  public defaultCommunity: SelectAttributes = {name: 'defaultCom', placeholder: 'Community', roles: {}};


  //input value
  //statePara: string;
  countyPara: number;
  countyTextPara: string;
  cityPara: number;
  cityTextPara: string;
  communityPara: number;
  communityTextPara: string;

  userNamePara: string;
  userPasswordPara: string;
  userConPasswordPara: string;
  firstNamePara: string;
  lastNamePara: string;
  phonePara: string;
  emailPara: string;

  loadCity: boolean = false;
  loadCommunity: boolean = false;

  comAdmins: CommunityAdmin[];
  confirmed: boolean = false;

  constructor(
    private fb: FormBuilder,
    private comAdminService: UserService,
    private locService: LocationService
  ) { }

  ngOnInit() {
    this.buildForm();
    if (localStorage.length != 0) {
      this.stateAdmin = JSON.parse(localStorage.getItem('curUser'));
      this.locId = this.stateAdmin.location;
    }
    this.getCounties();
    this.getComAdmin();
  }

  // TODO: change the method to get community admin by state
  getComAdmin(): void {
    this.comAdminService.getComAdmin()
      .subscribe( comAdmin => this.comAdmins = comAdmin);
  }

  buildForm(): void {
    this.communityGroup = this.fb.group({
      dState:['',[]],
      // state: ['', [Validators.required]],
      county:['',[Validators.required]],
      city:['',[Validators.required]],
      community:['',[Validators.required]]
    });
    this.userForm = this.fb.group({
      username:['',[ Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,ValidationService.passwordValidator]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
      firstName:['',[ Validators.required,Validators.minLength(4)]],
      lastName:['',[ Validators.required,Validators.minLength(4)]],
      phone:['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  getCounties() {
    this.locService.getCountyByState(this.locId)
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
      this.locService.getCityByCounty(this.countyPara)
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
    if (this.cityPara != null) {}
    this.locService.getCommunityByCity(this.cityPara)
      .subscribe(com => {
        this.communities = com;
        for (let comm of this.communities) {
          let comRole = new roleNum({value: comm.id, viewValue: comm.community});
          this.communityRole.push(comRole);
          if (this.communityRole.length != 0) {
            this.loadCommunity = true;
          }
        }
      });
  }


  getCounty(value:number){
    if(value){
      this.countyPara = value;
      for (let ele of this.countyRole) {
        let temp = ele.findValue(this.countyPara);
        if (temp != null) {
          this.countyTextPara= temp;
        }
        this.getCities();
      }
      console.log("username:"+this.countyTextPara);

    }
  }

  getCity(value:number){
    if(value){
      this.cityPara = value;
      for (let ele of this.cityRole) {
        let temp = ele.findValue(this.cityPara);
        if (temp != null) {
          this.cityTextPara = temp;
        }
        this.getCommunities();
      }
      //console.log("username:"+this.cityPara);
    }
  }

  getCommunity(value: number){
    if(value){
      this.communityPara = value;
      for (let ele of this.communityRole) {
        const temp = ele.findValue(this.communityPara);
        if (temp != null) {
          this.communityTextPara = temp;
        }
      }
      //console.log("username:"+this.communityPara);
    }
  }

  getUserName(value:string){
    if(value){
      this.userNamePara = value;
      //console.log("username:"+this.userNamePara);
    }
  }

  getUserPassword(value: string){
    if(value){
      this.userPasswordPara = value;
      //console.log("password:"+this.userPasswordPara);
    }
  }

  getUserConPassword(value: string){
    if(value){
      this.userConPasswordPara = value;
      //console.log("password:"+this.userConPasswordPara);
    }
  }

  getFirstName(value: string) {
    if (value) {
      this.firstNamePara = value;
      //console.log("firstName:"+this.firstNamePara);
    }
  }

  getLastName(value: string) {
    if (value) {
      this.lastNamePara = value;
      //console.log('lastName:'+this.lastNamePara);
    }
  }

  getPhone(value: string) {
    if (value) {
      this.phonePara = value;
    }
  }

  getEmail(value: string) {
    if (value) {
      this.emailPara = value;
    }
  }

  addComAdmin() {
    const newComAdmin = new CommunityAdmin({
      username: this.userNamePara,
      password: this.userPasswordPara,
      firstname: this.firstNamePara,
      lastname: this.lastNamePara,
      email: this.emailPara,
      phone: this.phonePara,
      community: this.communityTextPara,
      city: this.cityTextPara,
      county: this.countyTextPara,
      state: this.defaultState.value,
    });

    this.comAdminService.addComAdmin(newComAdmin)
      .subscribe(comAdmin => this.comAdmins.push(comAdmin));
    console.log(newComAdmin);

    this.confirmed = true;
  }
}
