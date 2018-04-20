import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../../../../shared/validation-service/validation.service';
import {InputAttributes} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public profileGroup: FormGroup;

  public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};

  userPasswordPara: string;
  userConPasswordPara: string;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.profileGroup = this.fb.group({
      password:['',[Validators.required,ValidationService.passwordValidator]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]]
    })
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
}
