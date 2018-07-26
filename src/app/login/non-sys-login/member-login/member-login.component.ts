import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../../../shared/validation-service/validation.service';
import { InputAttributes } from '../../../shared/shared-control/attributes';
import {CurrentUser} from "../../../model/User";
import {StateService} from "../../../service/state.service";
import {UserService} from "../../../service/user.service";
import {BhcoMessageComponent} from "../bhco-login/bhco-login.component";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  public userForm: any;
  public userName: InputAttributes = {name:'username',min:4,max:32, placeholder: 'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32, placeholder: 'password', type: 'password'};

  userNamePara : string;
  userPasswordPara : string;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private stateService: StateService,
    private userService: UserService,
    public snackBar: MatSnackBar,
  ) { }

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

    this.userService.memberLogin(logInfo).subscribe(value => {
      if (value) {
        const member = new CurrentUser({
          id: value.id,
          name: value.name,
          role: "Community Member",
          token: value.accessToken
        });
        localStorage.setItem('curUser', JSON.stringify(member));
        this.stateService.profileRole$.next("Community Member");
        this.router.navigateByUrl('MemberDashboard');
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
    this.snackBar.openFromComponent(MemberMessageComponent, {
      duration: 3000,
    });
  }
}

//TODO: add message module and component and import the current component from module
@Component({
  selector: 'member-message',
  templateUrl: 'member-message.html',
})
export class MemberMessageComponent {}
