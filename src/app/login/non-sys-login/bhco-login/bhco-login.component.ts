import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../../../shared/validation-service/validation.service';
import { InputAttributes } from '../../../shared/shared-control/attributes';
import {CurrentUser} from "../../../model/User";
import {StateService} from "../../../service/state.service";
import {UserService} from "../../../service/user.service";
import {MatSnackBar} from "@angular/material";
import {MessageComponent} from "../../sys-login/sys-login.component";


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

  constructor(
    private fb: FormBuilder,
    public router : Router,
    private stateService: StateService,
    private userService: UserService,
    public snackBar: MatSnackBar,
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
    }
  }

  getUserPassword(value: string){
    if(value){
      this.userPasswordPara = value;
    }
  }

  login() {
    const logInfo = {
      username: this.userNamePara,
      password: this.userPasswordPara
    };
    this.userService.bhcoLogin(logInfo).subscribe(value => {
      if (value) {
        const bhco = new CurrentUser({
          id: value.id,
          name: value.name,
          role: "bhco",
          location: value.location,
          token: value.accessToken
        });
        localStorage.setItem('curUser', JSON.stringify(bhco));
        this.stateService.profileRole$.next("Bhco");
        this.router.navigateByUrl('BhcoDashboard')
      } else {
        this.openSnackBar();
      }
    });

  }

  back() {
    this.router.navigateByUrl('login')
  }

  forgotPwd() {
    this.router.navigateByUrl('forgotPwd')
  }

  openSnackBar() {
    this.snackBar.openFromComponent(BhcoMessageComponent, {
      duration: 3000,
    });
  }
}

//TODO: add message module and component and import the current component from module
@Component({
  selector: 'bhco-message',
  templateUrl: 'bhco-message.html',
})
export class BhcoMessageComponent {}

