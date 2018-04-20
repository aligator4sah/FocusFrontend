import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import {Bhcos} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-create-bhco',
  templateUrl: './create-bhco.component.html',
  styleUrls: ['./create-bhco.component.css']
})
export class CreateBhcoComponent implements OnInit {
  //form group para
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
    private userService: UserService) {

  }

  ngOnInit() {
    this.getBhcos();
    this.buildForm();
  }

  getBhcos(): void {
      this.userService.getBhcos()
        .subscribe(bhcos => this.bhcos = bhcos);
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      username:['',[ Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,ValidationService.passwordValidator]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
      firstname:['',[ Validators.required,Validators.minLength(4)]],
      lastname:['',[Validators.required,Validators.minLength(4)]],
      email: ['',[Validators.required,ValidationService.emailValidator]],
      phone: ['',[Validators.required,Validators.minLength(6)]]
    });
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

  getFirstName(value:string){
    if(value){
      this.firstNamePara = value;
      //console.log("username:"+this.firstNamePara);
    }
  }

  getLastName(value: string){
    if(value){
      this.lastNamePara = value;
      //console.log("password:"+this.lastNamePara);
    }
  }

  getEmail(value: string){
    if(value){
      this.emailPara = value;
      //console.log("password:"+this.emailPara);
    }
  }

  getPhone(value: string) {
    if (value) {
      this.phonePara = value;
    }
  }

  addBhcos() {
    const newBhco = new Bhcos({
      username: this.userNamePara,
      password: this.userPasswordPara,
      firstname: this.firstNamePara,
      lastname: this.lastNamePara,
      email: this.emailPara,
      phone: this.phonePara
    })

    this.userService.addBhco(newBhco)
      .subscribe(bhco => this.bhcos.push(bhco));
    console.log(newBhco);

    this.confirmed = true;
  }

}
