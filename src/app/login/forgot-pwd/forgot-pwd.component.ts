import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Validators,FormBuilder} from '@angular/forms';
import { ValidationService} from '../../shared/validation-service/validation.service';
import { InputAttributes} from '../../shared/shared-control/attributes';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {

  public userForm : any;
  public roles = Roles;
  public email: InputAttributes = {name:'email',min:6,max:32, placeholder: 'email', type: 'email'};

  userEmailPara : string;
  constructor(
    public router : Router,
    private fb:  FormBuilder
  ) {}

  ngOnInit() {
    this.userForm= this.fb.group(
      {
        'email': ['',[ Validators.required,ValidationService.emailValidator]],
        'role': ['', Validators.required]
      }
    );
  }

  getUserEmail(value:string){
    if(value){
      this.userEmailPara = value;
      console.log("username:"+this.userEmailPara);
    }
  }

  back() {
    this.router.navigateByUrl('login')
  }

  sentRequest(){
    //
  }
}


export const Roles = [
  {value: 'StateAdmin', viewValue: 'State Administrator'},
  {value: 'CommunityAdmin', viewValue: 'Community Administrator'},
  {value: 'BHCO', viewValue: 'BHCO'},
  {value: 'CommunityMem', viewValue: 'Community Member'}
];
