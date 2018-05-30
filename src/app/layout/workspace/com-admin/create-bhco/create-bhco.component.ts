import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import {Bhcos} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-bhco',
  templateUrl: './create-bhco.component.html',
  styleUrls: ['./create-bhco.component.css']
})
export class CreateBhcoComponent implements OnInit {
  //form group para
  public locId = JSON.parse(localStorage.getItem('curUser')).location;
  public location = JSON.parse(localStorage.getItem('curLoc'));
  public registerForm : FormGroup;
  //validator para
  public userName : InputAttributes = {name:'username',min:4,max:32,placeholder:'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};
  public firstName :InputAttributes = {name:'firstname',min:2,max:32,placeholder:'first name',type:'text'};
  public lastName :InputAttributes = {name:'lastname',min:2,max:32,placeholder:'last name',type:'text'};
  public email: InputAttributes = {name:'email',min:6,max:32,placeholder:'email',type:'email'};
  public phone: InputAttributes = {name: 'phone', min: 6, max:32, placeholder: 'phone', type: 'tel'};

  //input value
  userNamePara: string;
  userPasswordPara: string;
  userConPasswordPara: string;
  firstNamePara: string;
  lastNamePara: string;
  emailPara: string;
  phonePara: string;

  bhcos: Bhcos[];
  confirmed: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.getBhcos();
    this.buildForm();
  }

  getBhcos(): void {
      this.userService.getBhcoByCom(this.locId)
        .subscribe(bhcos => this.bhcos = bhcos);
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      username:['',[ Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,ValidationService.passwordValidator]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
      firstname:['',[ Validators.required,Validators.minLength(1)]],
      lastname:['',[Validators.required,Validators.minLength(1)]],
      email: [''],
      phone: ['']
    });
  }

  /**get user input and create new bhco */
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

  getUserConPassword(value: string){
    if(value){
      this.userConPasswordPara = value;
    }
  }

  getFirstName(value:string){
    if(value){
      this.firstNamePara = value;
    }
  }

  getLastName(value: string){
    if(value){
      this.lastNamePara = value;
    }
  }

  addBhcos() {
    const newBhco = new Bhcos({
      username: this.userNamePara,
      password: this.userPasswordPara,
      firstname: this.firstNamePara,
      lastname: this.lastNamePara,
      email: this.registerForm.controls['email'].value,
      phone: this.registerForm.controls['phone'].value,
      community: this.location.community,
      city: this.location.city,
      county: this.location.county,
      state: this.location.state,
    });

    this.userService.addBhco(newBhco)
      .subscribe(bhco => this.bhcos.push(bhco));
    console.log(newBhco);
    this.confirmed = true;
    this.router.navigateByUrl('CommunityDashboard/bhcoList');
  }

}
