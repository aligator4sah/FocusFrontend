import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {defaultAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import { States } from '../../../../shared/shared-control/attributes';
import {UserService} from "../../../../service/user.service";
import {Bhcos, CommunityAdmin} from "../../../../model/User";
import {County} from "../../../../model/location";


@Component({
  selector: 'app-create-com',
  templateUrl: './create-com.component.html',
  styleUrls: ['./create-com.component.css']
})
export class CreateComComponent implements OnInit {
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
  public selectCounty: SelectAttributes = {name:'county',roles:this.states,placeholder:'county'};
  public selectCity: SelectAttributes = {name:'city',roles:this.states,placeholder:'city'};
  public selectCommunity: SelectAttributes = {name:'community',roles:this.states,placeholder:'community'};
  public userName : InputAttributes = {name:'username',min:4,max:32,placeholder:'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};

  public userFirstName : InputAttributes = {name:'firstName', min: 4, max:32, placeholder:'First Name', type: 'text'};
  public userLastName: InputAttributes = {name: 'lastName', min: 4, max: 32, placeholder: 'Last Name', type: 'text'};
  public userPhone: InputAttributes = {name: 'phone', min:8, max: 10, placeholder:'Phone', type:'text'};
  public userEmail: InputAttributes = {name: 'email', min: 8, max: 16, placeholder: 'Email', type: 'text'};

  //input value
  //statePara: string;
  countyPara: string;
  cityPara: string;
  communityPara: string;
  userNamePara: string;
  userPasswordPara: string;
  userConPasswordPara: string;
  firstNamePara: string;
  lastNamePara: string;
  phonePara: string;
  emailPara: string;

  comAdmins: CommunityAdmin[];
  confirmed: boolean = false;

  constructor(
    private fb: FormBuilder,
    private comAdminService: UserService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getComAdmin();
  }

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


  getCounty(value:string){
    if(value){
      this.countyPara = value;
      //console.log("username:"+this.countyPara);
    }
  }

  getCity(value:string){
    if(value){
      this.cityPara = value;
      //console.log("username:"+this.cityPara);
    }
  }

  getCommunity(value:string){
    if(value){
      this.communityPara = value;
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
      community: this.communityPara,
      city: this.cityPara,
      county: this.countyPara,
      state: this.defaultState.value,
    });

    this.comAdminService.addComAdmin(newComAdmin)
      .subscribe(comAdmin => this.comAdmins.push(comAdmin));
    console.log(newComAdmin);

    this.confirmed = true;
  }
}
