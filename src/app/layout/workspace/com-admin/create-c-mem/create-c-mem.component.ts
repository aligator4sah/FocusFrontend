import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {role, roleNum, SelectAttributes} from '../../../../shared/shared-control/attributes';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { defaultAttributes} from '../../../../shared/shared-control/attributes';
import { Gender} from '../../../../shared/shared-control/attributes';
import { States} from '../../../../shared/shared-control/attributes';
import { Race } from '../../../../shared/shared-control/attributes';
import { MaritalStatus } from '../../../../shared/shared-control/attributes';
import { Education} from '../../../../shared/shared-control/attributes';
import { Employment} from '../../../../shared/shared-control/attributes';
import { DatePipe } from '@angular/common';
import {Member} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";
import {Block, Family, LocInfo} from "../../../../model/location";
import {ValidationService} from "../../../../shared/validation-service/validation.service";
import {LocationService} from "../../../../service/location.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-c-mem',
  templateUrl: './create-c-mem.component.html',
  styleUrls: ['./create-c-mem.component.css']
})
export class CreateCMemComponent implements OnInit {
  //form group
  public userForm: FormGroup;
  public addressFormGroup: FormGroup;
  public otherFormGroup: FormGroup;

  // get blocks and family options from the server
  public locId = JSON.parse(localStorage.getItem('curUser')).location;
  blocks: Block[];
  families: Family[];
  blockRole: roleNum[] = [];
  famRole: roleNum[] = [];
  locationInfo: LocInfo = JSON.parse(localStorage.getItem('curLoc'));

  statePara: string = this.locationInfo.state;
  countyPara: string = this.locationInfo.county;
  cityPara: string = this.locationInfo.city;
  communityPara: string = this.locationInfo.community;

  //front-end para
  public gender = Gender;
  public races = Race;
  public matrialS = MaritalStatus;
  public educationS = Education;
  public employmentS = Employment;
  //structure para
  public isLinear = true;
  //validator para
  public selectFamily: SelectAttributes = {name:'family',roles:this.famRole,placeholder:'family'};
  public selectBlock :SelectAttributes = {name:'block',roles:this.blockRole,placeholder:'block'};
  public userName : InputAttributes = {name:'username',min:4,max:32,placeholder:'username', type: 'text'};

  public firstName :InputAttributes = {name:'firstname',min:4,max:32,placeholder:'first name',type:'text'};
  public midName: InputAttributes = {name:'midname',min:0,max:32,placeholder:'mid name',type:'text'};
  public lastName :InputAttributes = {name:'lastname',min:3,max:32,placeholder:'last name',type:'text'};
  public selectGender :SelectAttributes = {name:'gender',roles:this.gender,placeholder:'gender'};
  public phoneNumber: InputAttributes = {name:'phone',min:10,max:12,placeholder:'phone number',type:'tel'};
  public inputEmail: InputAttributes = {name: 'email', min:8, max:32, placeholder:'email', type: 'email'};
  public date: InputAttributes = {name:'date',min:8,max:10,placeholder:'date of birth (MM/DD/YYYY)',type:'text'};
  public addressOne: InputAttributes = {name:'address1',min:6,max:32,placeholder:'address one',type:'text'};
  public addressTwo: InputAttributes = {name:'address2',min:0,max:32,placeholder:'address two',type:'text'};
  public race: SelectAttributes = {name:'race',roles:this.races,placeholder:'race'};
  public matrialStatus :SelectAttributes = {name:'marital',roles:this.matrialS,placeholder:'marital status'};
  public educations: SelectAttributes = {name:'education',roles:this.educationS,placeholder:'education status'};
  public employments: SelectAttributes = {name:'employment',roles:this.employmentS,placeholder:'employment status'};
  public defaultState: defaultAttributes = {name:'dState',value:this.statePara,type:'text',placeholder:'state'};
  public defaultCounty: defaultAttributes = {name:'dCounty',value: this.countyPara,type:'text',placeholder:'county'};
  public defaultCity: defaultAttributes = {name:'dCity',value:this.cityPara,type:'text',placeholder:'city'};
  public defaultCommunity: defaultAttributes = {name:'dCommunity',value:this.communityPara,type:'text',placeholder:'community'};
  public defaultPassword: defaultAttributes = {name: 'dPassword', value: 'imHealthy@2018', type:'text', placeholder:'password'};
  public defaultFamily: SelectAttributes = {name: 'deFamily', placeholder: 'Family', roles: []};
  public defaultBlock: SelectAttributes = {name: 'deBlock', placeholder: 'Block', roles: []};

  //input value
  userNamePara: string;
  blockPara: number;
  familyPara: number;
  blockTextPara: string;
  familyTextPara: string;
  firstNamePara: string;
  lastNamePara: string;
  midNamePara: string;
  genderPara: string;
  phonePara: string;
  datePara: string;
  addressOnePara: string;
  addressTwoPara: string;
  racePara: string;
  matrialPara: string;
  empolymentPara: string;
  educationPara: string;
  emailPara: string;
  dobPara: string;
  passwordPara = this.defaultPassword.value;

  //add a new community member
  members: Member[];

  // disable the select box before data has been loaded
  isBlock = false;
  isFamily = false;
  show: boolean = false;

  constructor(
    private fb:FormBuilder,
    private datapipe : DatePipe,
    private userService: UserService,
    private locService: LocationService,
    private router: Router
  ){ }

  ngOnInit() {
    this. buildForm();
    if (this.locId != null) {
      this.getMembers();
      this.getBlocks();
    }
    //console.log(this.locationInfo);
  }



  buildForm(): void {
    this.addressFormGroup = this.fb.group({
      block: ['', [Validators.required]],
      family:['',[Validators.required]],
      dState:['',[]],
      dCounty:['',[]],
      dCity:['',[]],
      dCommunity:['',[]],
      deFamily: ['',[]],
      deBlock: ['', []]
    });
    this.userForm = this.fb.group({
      username:['',[ Validators.required,Validators.minLength(4)]],
      dPassword:['',[]],
      firstname:['',[ Validators.required,Validators.minLength(1)]],
      midname:[''],
      lastname:['',[Validators.required,Validators.minLength(1)]],
      gender:['',[Validators.required]],
      phone:['', Validators.required],
      date:['',[Validators.required]],
      address1:['',[Validators.required,Validators.minLength(6)]],
      address2:['',[]],
      email: ['', Validators.required]
    });
    this.otherFormGroup = this.fb.group({
      race:['',[Validators.required]],
      marital:['',[Validators.required]],
      education:['',[Validators.required]],
      employment:['',[Validators.required]]
    })
  }

  /** get block and family information from server*/
  getBlocks() {
      this.locService.getBlockByCommunity(this.locId)
        .subscribe(blo => {
          this.blocks = blo;
          if (this.blocks.length > 0) {
            for (let block of this.blocks) {
              let cur = new roleNum({value: block.id, viewValue: block.block});
              this.blockRole.push(cur);
            }
            this.isBlock = true;
          }
        });
  }

  getFamilies() {
    if (this.blockPara != null) {
      this.locService.getFamilyByBlock(this.blockPara)
        .subscribe(fam => {
          this.families = fam;
          if (this.families.length > 0) {
            for (let fami of this.families) {
              let cur = new roleNum({value: fami.id, viewValue: fami.family});
              this.famRole.push(cur);
            }
            this.isFamily = true;
          }
        });
    }
  }

  getMembers(): void {
    this.userService.getMemberByCom(this.locId)
      .subscribe(members => this.members = members);
  }


  /** get user input and pass the value to the backend*/

  getBlock(value:number){
    if(value){
      this.blockPara = value;
      for (let blo of this.blockRole) {
        if(blo.value == this.blockPara) {
          this.blockTextPara = blo.viewValue;
        }
      }
      this.getFamilies();
    }
  }

  getFamily(value:number){
    if(value){
      this.familyPara = value;
      for (let fami of this.famRole) {
        if (fami.value == this.familyPara) {
          this.familyTextPara = fami.viewValue;
        }
      }
    }
  }

  getUserName(value:string){
    if(value){
      this.userNamePara = value;
    }
  }

  getLastName(value:string){
    if(value){
      this.lastNamePara = value;
    }
  }

  getFirstName(value:string){
    if(value){
      this.firstNamePara = value;
    }
  }


  getGender(value:string){
    if(value){
      this.genderPara = value;
    }
  }


  getDate(value:string){
    if(value){
      this.datePara = value;
      this.dobPara = this.datapipe.transform(this.datePara, "yyyy-MM-dd")
      console.log(this.dobPara);
    }
  }

  getAddressOne(value:string){
    if(value){
      this.addressOnePara = value;
    }
  }

  getRace(value:string){
    if(value){
      this.racePara = value;
    }
  }

  getMatrial(value:string){
    if(value){
      this.matrialPara = value;
    }
  }

  getEmployment(value:string){
    if(value){
      this.empolymentPara = value;
    }
  }

  getEducation(value:string){
    if(value){
      this.educationPara = value;
    }
  }


  addMember(): void {
    const comMember = new Member({
      username: this.userNamePara,
      password: this.passwordPara,
      firstname: this.firstNamePara,
      midname: this.userForm.controls['midname'].value,
      lastname: this.lastNamePara,
      gender: this.genderPara,
      phone: this.userForm.controls['phone'].value,
      email: this.userForm.controls['email'].value,
      date: this.dobPara,
      addressone: this.addressOnePara,
      addresstwo: this.addressTwoPara,
      family: this.familyTextPara,
      block: this.blockTextPara,
      community: this.locId,
      city: this.cityPara,
      county: this.countyPara,
      state: this.statePara,
      race: this.racePara,
      marry: this.matrialPara,
      education: this.educationPara,
      employments: this.empolymentPara
    });

    this.userService.addMember(comMember)
      .subscribe(member => this.members.push(member));

    this.show = true;
    this.router.navigateByUrl('/CommunityDashboard/memberList');
    //console.log(comMember);
  }




}
