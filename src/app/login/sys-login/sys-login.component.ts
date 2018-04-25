import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../../shared/validation-service/validation.service';
import {InputAttributes, SelectAttributes,Admins} from '../../shared/shared-control/attributes';
import {CurrentUser} from "../../model/User";

@Component({
  selector: 'app-sys-login',
  templateUrl: './sys-login.component.html',
  styleUrls: ['./sys-login.component.css']
})
export class SysLoginComponent implements OnInit {

  public role = Admins;

  public userName: InputAttributes = {name:'username',min:4,max:32, placeholder:'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32, placeholder: 'password', type: 'password'};
  public admin: SelectAttributes = {name:'admin',roles:this.role, placeholder: 'admin'};
  public userForm:any;

  //backend para
  userNamePara :string;
  userPasswordPara: string;
  userAdminPara:string;


  // TODO: get administrator token from server
  public sysAdmin = new CurrentUser({
    id: 1,
    name: this.userNamePara,
    role: "System Administrator",
  });
  public stateAdmin = new CurrentUser({
    id: 1,
    name: this.userNamePara,
    role: "State Administrator",
    location: 39,
  });
  public comAdmin = new CurrentUser({
    id: 4,
    name: this.userNamePara,
    role: "Community Administrator",
    location: 4,
  });

  constructor(
    public router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.userForm= this.fb.group(
      {
        'password': ['',[ Validators.required,ValidationService.passwordValidator]],
        'username': ['',[ Validators.required,Validators.minLength(4)]],
        'admin': ['',[ Validators.required]]
      }
    );
    localStorage.clear();
    // console.log(this.userForm.invalid)
    // console.log(this.admin.roles);
  }

  getUserName(value:string){
    if(value){
      this.userNamePara = value;
      console.log("username:"+this.userNamePara);
      this.sysAdmin.setName(this.userNamePara);
      this.stateAdmin.setName(this.userNamePara);
      this.comAdmin.setName(this.userNamePara);
    }
  }

  getUserPassword(value: string){
    if(value){
      this.userPasswordPara = value;
      console.log("password:"+this.userPasswordPara);
    }
  }

  getUserAdmin(value: string){
    if(value){
      this.userAdminPara = value;
      console.log("role:"+this.userAdminPara);
    }
  }

  login(){
    //this.roleName = this.getRole();
    if (this.userAdminPara === "system") {
      localStorage.setItem('curUser', JSON.stringify(this.sysAdmin));
      this.router.navigateByUrl('SysDashboard');
    } else if (this.userAdminPara === "state") {
      localStorage.setItem('curUser', JSON.stringify(this.stateAdmin));
      this.router.navigateByUrl('StateDashboard');
    } else {
      localStorage.setItem('curUser', JSON.stringify(this.comAdmin));
      this.router.navigateByUrl('CommunityDashboard');
    }
  }

  back(){
    this.router.navigateByUrl('login');
  }

  forgotPwd(){
    this.router.navigateByUrl('forgotPwd')
  }
}
