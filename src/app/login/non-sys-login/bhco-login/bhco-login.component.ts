import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../../../shared/validation-service/validation.service';
import { InputAttributes } from '../../../shared/shared-control/attributes';
import {CurrentUser} from "../../../model/User";


@Component({
  selector: 'app-bhco-login',
  templateUrl: './bhco-login.component.html',
  styleUrls: ['./bhco-login.component.css']
})
export class BhcoLoginComponent implements OnInit {
  public userForm:any;
  public userName: InputAttributes = {name:'username',min:4,max:32, placeholder: 'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32, placeholder: 'password', type: 'password'};

  userNamePara :string;
  userPasswordPara: string;

  // TODO: get the bhco token from server
  public curBhco = new CurrentUser({
    id: 1,
    name: this.userNamePara,
    role: "bhco",
    location: 1
  })

  constructor(
    private fb: FormBuilder,
    public router : Router
  ) {

  }

  ngOnInit() {
    this.userForm= this.fb.group(
      {
        'password': ['',[ Validators.required,ValidationService.passwordValidator]],
        'username': ['',[ Validators.required,Validators.minLength(4)]],
      }
    );
    localStorage.clear();
  }

  getUserName(value:string){
    if(value){
      this.userNamePara = value;
      console.log("username:"+this.userNamePara);
      this.curBhco.setName(this.userNamePara);
    }
  }

  getUserPassword(value: string){
    if(value){
      this.userPasswordPara = value;
      console.log("password:"+this.userPasswordPara);
    }
  }

  login() {
    localStorage.setItem('curUser', JSON.stringify(this.curBhco));
    this.router.navigateByUrl('BhcoDashboard')
  }

  back() {
    this.router.navigateByUrl('login')
  }

  forgotPwd() {
    this.router.navigateByUrl('forgotPwd')
  }
}
