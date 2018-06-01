import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Block, InputAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import {ValidationService} from '../../../../shared/validation-service/validation.service';
import {StateService} from "../../../../service/state.service";
import {UserService} from "../../../../service/user.service";
import {Member} from "../../../../model/User";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  role: String;
  user = JSON.parse(localStorage.getItem('curUser'));
  profile: any;

  profileGroup: FormGroup;
  basicGroup: FormGroup;

  public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};

  needReset: boolean = false;
  userPasswordPara: string;
  userConPasswordPara: string;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.stateService.profileRole$.subscribe(value => {
      this.role = value;
      if (this.role === "System Administrator") {
        this.getSystemAdmin();
      } else if (this.role === "State Administrator") {
        this.getStateAdmin();
      } else if (this.role === "Community Administrator") {
        this.getCommunityAdmin();
      } else if (this.role === "Bhco") {
        this.getBhco();
      } else {
        this.getCommunityMember();
      }
    });

  }

  /**get diff profile infor accroding to diff roles **/
  getSystemAdmin() {
    this.userService.getSystemAdminById(this.user.id).subscribe(value => {
      this.profile = value;
      this.buildBasicForm();
    });
  }

  getStateAdmin() {
    this.userService.getStateAdminById(this.user.id).subscribe(value =>{
      this.profile = value;
      this.buildBasicForm();
    });
  }

  getCommunityAdmin() {
    this.userService.getCommunityAdminById(this.user.id).subscribe(value => {
      this.profile = value;
      this.buildBasicForm();
    });
  }

  getBhco() {
    this.userService.getBhcoById(this.user.id).subscribe(value => {
      this.profile = value;
      this.buildBasicForm();
    });
  }

  getCommunityMember() {
    this.userService.getMemberById(this.user.id).subscribe(value => {
      this.profile = value;
      this.buildBasicForm();
    });
  }


  /**build forms for basic information **/

  buildBasicForm() {
    this.basicGroup = this.fb.group({
      firstname: [this.profile.firstname],
      lastname: [this.profile.lastname],
      phone: [this.profile.phone],
      email: [this.profile.email],
    })
  }


  buildForm(): void {
    this.profileGroup = this.fb.group({
      password:['',[Validators.required,ValidationService.passwordValidator]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  resetPassword() {
    this.needReset = !this.needReset;
    this.buildForm();
  }


  getUserPassword(value: string){
    if(value){
      this.userPasswordPara = value;
      console.log("password:"+this.userPasswordPara);
    }
  }

  getUserConPassword(value: string){
    if(value){
      this.userConPasswordPara = value;
      console.log("password:"+this.userConPasswordPara);
    }
  }

  confirmBasicChange() {
    let updateBasicInfo = new Member({
      firstname: this.basicGroup.controls['firstname'].value,
      lastname: this.basicGroup.controls['lastname'].value,
      phone: this.basicGroup.controls['phone'].value,
      email: this.basicGroup.controls['email'].value,
    });

    if (this.role === "State Administrator") {
      this.userService.updateStateAdminById(this.user.id, updateBasicInfo).subscribe();
    } else if (this.role === "Community Administrator") {
      this.userService.updateCommunityAdminById(this.user.id, updateBasicInfo).subscribe();
    } else if (this.role === "Bhco") {
      this.userService.updateBhcoById(this.user.id, updateBasicInfo).subscribe();
    } else if (this.role === "Community Member") {
      this.userService.updateMemberById(this.user.id, updateBasicInfo).subscribe();
    } else {
      this.userService.updateSystemAdminById(this.user.id, updateBasicInfo).subscribe();
    }
  }

  goBack() {
    window.history.back();
  }

}
