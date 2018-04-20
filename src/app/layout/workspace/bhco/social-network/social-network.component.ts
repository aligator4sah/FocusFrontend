import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SelectAttributes, InputAttributes, CheckAttributes, validationTool} from '../../../../shared/shared-control/attributes';
import { Relation} from '../../../../shared/shared-control/attributes';
import {SocialNetworkAnswerGroupComponent} from './social-network-answer-group/social-network-answer-group.component';


@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit {
  //structure
  @ViewChild(SocialNetworkAnswerGroupComponent)
  public isLinear = false;
  //form group
  //public firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;
  // forthFormGroup: FormGroup;
  // fifthFormGroup: FormGroup;
  // sixthFormGroup: FormGroup;
  //validator para
  // public inputNumber: InputAttributes = {name:'number',min:1,max:5,placeholder:'order',type:'number'};
  // public inputFirstName: InputAttributes = {name:'firstName',min:2,max:32,placeholder:'first name',type:'text'};
  // public inputLastName: InputAttributes = {name:'lastName',min:2,max:32,placeholder:'last name',type:'text'};
  // public inputMidName: InputAttributes= {name:'midName',min:0,max:32,placeholder:'Middle/Suffix',type:'text'};
  // public selectRelation: SelectAttributes={name:'relation',roles:Relation,placeholder:'relationship'};
  // public checkBlock: CheckAttributes = {name:'block',placeholder:'same block'};

  public ValidatorOne : validationTool = {
    QNumber:1,
    QTitle: "1.Who positively impacts your life the most?"
  };

  public ValidatorTwo: validationTool = {
    QNumber:2,
    QTitle:"2. Who do you spend most of your time with?"
  };

  public ValidatorThree: validationTool = {
    QNumber:3,
    QTitle:"3. Who do you go for help?"
  };

  public ValidatorFour: validationTool = {
    QNumber:4,
    QTitle:"4. Who typically inspires you?"
  };

  public ValidatorFive: validationTool = {
    QNumber:5,
    QTitle:"5. Who do you get along with the best?"
  };

  public ValidatorSix: validationTool = {
    QNumber:6,
    QTitle:"6. Who has the most negative influence on you?"
  };

  // //backend data
  // numberParaOne: string;
  // numberParaTwo: string;
  // numberParaThree: string;
  // numberParaFour: string;
  // numberParaFive: string;
  // numberParaSix: string;
  //
  // firstNameOne: string;
  // firstNameTwo: string;
  // firstNameThree: string;
  // firstNameFour: string;
  // firstNameFive: string;
  // firstNameSix: string;
  //
  // lastNameOne: string;
  // lastNameTwo: string;
  // lastNameThree: string;
  // lastNameFour: string;
  // lastNameFive: string;
  // lastNameSix: string;
  //
  // midNameOne: string;
  // midNameTwo: string;
  // midNameThree: string;
  // midNameFour: string;
  // midNameFive: string;
  // midNameSix: string;
  //
  // relationOne: string;
  // relationTwo: string;
  // relationThree: string;
  // relationFour: string;
  // relationFive: string;
  // relationSix: string;
  //
  // checkOne: string;
  // checkTwo: string;
  // checkThree: string;
  // checkFour: string;
  // checkFive: string;
  // checkSix: string;

  constructor(private _formBuilder: FormBuilder) {
    // setTimeout(()=>{
    //   this.buildForm();
    // },0);
    //console.log("text");
    // this.firstFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.thirdFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.forthFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.fifthFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.sixthFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    console.log(this.ValidatorOne);
  }

  ngOnInit() {

    //this.buildForm();
    // setTimeout(()=>{
    //   this.buildForm();
    // });
    // console.log("text");
    // this.firstFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.thirdFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.forthFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.fifthFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
    //
    // this.sixthFormGroup = this._formBuilder.group({
    //   number: ['', Validators.nullValidator],
    //   firstName:['',[Validators.minLength(2)]],
    //   lastName:['',Validators.minLength(2)],
    //   midName:['',Validators.nullValidator],
    //   relation:['',Validators.nullValidator],
    //   block:['',Validators.nullValidator]
    // });
  }

  // buildForm(): void {
  //   this.firstFormGroup = this._formBuilder.group({
  //     number: ['', []],
  //     firstName:['',[Validators.minLength(2)]],
  //     lastName:['',[Validators.minLength(2)]],
  //     midName:['',[]],
  //     relation:['',[]],
  //     block:['',[]]
  //   });
  //   console.log("build form already");
  // }

  // getNumberOne(value:string){
  //   if(value){
  //     this.numberParaOne = value;
  //     console.log("username:"+this.numberParaOne);
  //   }
  // }
  //
  // getNumberTwo(value:string){
  //   if(value){
  //     this.numberParaTwo = value;
  //     console.log("username:"+this.numberParaTwo);
  //   }
  // }
  //
  // getNumberThree(value:string){
  //   if(value){
  //     this.numberParaThree = value;
  //     console.log("username:"+this.numberParaThree);
  //   }
  // }
  //
  // getNumberFour(value:string){
  //   if(value){
  //     this.numberParaFour = value;
  //     console.log("username:"+this.numberParaFour);
  //   }
  // }
  //
  // getNumberFive(value:string){
  //   if(value){
  //     this.numberParaFive = value;
  //     console.log("username:"+this.numberParaFive);
  //   }
  // }
  //
  // getNumberSix(value:string){
  //   if(value){
  //     this.numberParaSix = value;
  //     console.log("username:"+this.numberParaSix);
  //   }
  // }
  //
  // getFirstNameOne(value:string){
  //   if(value){
  //     this.firstNameOne = value;
  //     console.log("username:"+this.firstNameOne);
  //   }
  // }
  // getFirstNameTwo(value:string){
  //   if(value){
  //     this.firstNameTwo = value;
  //     console.log("username:"+this.firstNameTwo);
  //   }
  // }
  // getFirstNameThree(value:string){
  //   if(value){
  //     this.firstNameThree = value;
  //     console.log("username:"+this.firstNameThree);
  //   }
  // }
  // getFirstNameFour(value:string){
  //   if(value){
  //     this.firstNameFour = value;
  //     console.log("username:"+this.firstNameFour);
  //   }
  // }
  // getFirstNameFive(value:string){
  //   if(value){
  //     this.firstNameFive = value;
  //     console.log("username:"+this.firstNameFive);
  //   }
  // }
  // getFirstNameSix(value:string){
  //   if(value){
  //     this.firstNameSix = value;
  //     console.log("username:"+this.firstNameSix);
  //   }
  // }
  //
  // getLastNameOne(value:string){
  //   if(value){
  //     this.lastNameOne = value;
  //     console.log("username:"+this.lastNameOne);
  //   }
  // }
  //
  // getLastNameSix(value:string){
  //   if(value){
  //     this.lastNameSix = value;
  //     console.log("username:"+this.lastNameSix);
  //   }
  // }
  //
  // getLastNameTwo(value:string){
  //   if(value){
  //     this.lastNameTwo = value;
  //     console.log("username:"+this.lastNameTwo);
  //   }
  // }
  //
  // getLastNameThree(value:string){
  //   if(value){
  //     this.lastNameThree = value;
  //     console.log("username:"+this.lastNameThree);
  //   }
  // }
  //
  // getLastNameFour(value:string){
  //   if(value){
  //     this.lastNameFour = value;
  //     console.log("username:"+this.lastNameFour);
  //   }
  // }
  // getLastNameFive(value:string){
  //   if(value){
  //     this.lastNameFive = value;
  //     console.log("username:"+this.lastNameFive);
  //   }
  // }
  //
  // getMidNameOne(value:string){
  //   if(value){
  //     this.midNameOne = value;
  //     console.log("username:"+this.midNameOne);
  //   }
  // }
  //
  // getMidNameTwo(value:string){
  //   if(value){
  //     this.midNameTwo = value;
  //     console.log("username:"+this.midNameTwo);
  //   }
  // }
  //
  // getMidNameThree(value:string){
  //   if(value){
  //     this.midNameThree = value;
  //     console.log("username:"+this.midNameThree);
  //   }
  // }
  //
  // getMidNameFour(value:string){
  //   if(value){
  //     this.midNameFour = value;
  //     console.log("username:"+this.midNameFour);
  //   }
  // }
  //
  // getMidNameFive(value:string){
  //   if(value){
  //     this.midNameFive = value;
  //     console.log("username:"+this.midNameFive);
  //   }
  // }
  //
  // getMidNameSix(value:string){
  //   if(value){
  //     this.midNameSix = value;
  //     console.log("username:"+this.midNameSix);
  //   }
  // }
  //
  // relationsOne(value:string){
  //   if(value){
  //     this.relationOne = value;
  //     console.log("username:"+this.relationOne);
  //   }
  // }
  //
  // relationsTwo(value:string){
  //   if(value){
  //     this.relationTwo = value;
  //     console.log("username:"+this.relationTwo);
  //   }
  // }
  //
  // relationsThree(value:string){
  //   if(value){
  //     this.relationThree = value;
  //     console.log("username:"+this.relationThree);
  //   }
  // }
  //
  // relationsFour(value:string){
  //   if(value){
  //     this.relationFour = value;
  //     console.log("username:"+this.relationFour);
  //   }
  // }
  //
  // relationsFive(value:string){
  //   if(value){
  //     this.relationFive = value;
  //     console.log("username:"+this.relationFive);
  //   }
  // }
  //
  // relationsSix(value:string){
  //   if(value){
  //     this.relationSix = value;
  //     console.log("username:"+this.relationSix);
  //   }
  // }
  //
  // checkBoxOne(value:string){
  //   if(value){
  //     this.checkOne = value;
  //     console.log("username:"+this.checkOne);
  //   }
  // }
  //
  // checkBoxTwo(value:string){
  //   if(value){
  //     this.checkTwo = value;
  //     console.log("username:"+this.checkTwo);
  //   }
  // }
  //
  // checkBoxThree(value:string){
  //   if(value){
  //     this.checkThree = value;
  //     console.log("username:"+this.checkThree);
  //   }
  // }
  //
  // checkBoxFour(value:string){
  //   if(value){
  //     this.checkFour = value;
  //     console.log("username:"+this.checkFour);
  //   }
  // }
  //
  // checkBoxFive(value:string){
  //   if(value){
  //     this.checkFive = value;
  //     console.log("username:"+this.checkFive);
  //   }
  // }
  //
  // checkBoxSix(value:string){
  //   if(value){
  //     this.checkSix = value;
  //     console.log("username:"+this.checkSix);
  //   }
  // }




}
