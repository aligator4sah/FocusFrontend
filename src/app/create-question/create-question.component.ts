import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {defaultAttributes, InputAttributes, SelectAttributes} from "../shared/shared-control/attributes";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime'
import {DemoQuestion, Questionnare} from "../model/questionBase";
import {QuestionModelService} from "../service/question-model.service";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})

export class CreateQuestionComponent implements OnInit {
  public createQuesForm: FormGroup;

  public description : InputAttributes = {name:'desp',min:4,max:90,placeholder:'Please input question description', type: 'text'};
  public hints : InputAttributes = {name:'hint',min:4,max:90,placeholder:'Please input question indication', type: 'text'};
  public order: InputAttributes = {name: 'ord', min:1, max: 20, placeholder:'Please input question order', type: 'number'};
  public type :SelectAttributes = {name:'types',roles: questionType, placeholder:'Please Select question type'};
  public ansNumber: InputAttributes = {name: 'ansNo', min:1, max: 20, placeholder: 'Please input the number of answers', type: 'number'};
  public defaultAnsNo: defaultAttributes = {name: 'defaultAnsNo', value: '0', placeholder: 'No answer number needed', type: 'text'};
  public inputKey: InputAttributes = {name: 'key', min: 4, max: 20, placeholder: 'Please input answer extent', type: 'number'};
  public inputValue: InputAttributes = {name: 'value', min: 4, max: 20, placeholder: 'PLease input answer description', type: 'text'};
  public selectCategory: SelectAttributes = {name: 'cat', roles: category, placeholder: 'Please select the question category'};
  public selectDomain: SelectAttributes = {name: 'domain', roles: domains, placeholder: 'Please select domain'};
  public inputSubdomain: InputAttributes = {name: 'subdomain', min: 4, max: 20, placeholder:'Please input subdomain name', type: 'text'};

  despPara: string;
  hintPara: string;
  orderPara: number;
  typePara: string;
  ansNumPara: number;
  keyPara: string;
  valuePara: string;
  catPara: string;
  domainPara: string;
  subdomainPara: string;

  numbers: number[];
  questions: DemoQuestion[];
  questionnaires: Questionnare[];

  confirm: boolean = false;
  needAns: boolean = false;

  constructor(
    private fb: FormBuilder,
    private demoService: QuestionModelService
  ) {

  }

  ngOnInit() {
    this.buildForm();
  }

  getDemoQuestions(): void {
    this.demoService.getDemoQsuestions()
      .subscribe(ques => this.questions = ques);
  }

  getQuestionnaire(): void {
    this.demoService.getQuestionnaire()
      .subscribe(ques => this.questionnaires = ques);
  }

  buildForm(): void {
    this.createQuesForm = this.fb.group({
      desp: ['', [Validators.required]],
      hint:['',[Validators.required,Validators.minLength(4)]],
      ord:['',[Validators.required,Validators.minLength(1)]],
      types:['',[Validators.required,Validators.minLength(4)]],
      cat:['',[Validators.required,Validators.minLength(4)]],
      ansNo: ['', [Validators.required, Validators.minLength(1)]],
      key: ['', [Validators.required, Validators.minLength(1)]],
      value: ['', [Validators.required, Validators.minLength(1)]],
      domain:['',[Validators.required,Validators.minLength(4)]],
      subdomain: ['', [Validators.required, Validators.minLength(1)]],
      defaultAnsNo:['',[]],
    })

    this.createQuesForm.controls["key"].valueChanges.debounceTime(200).subscribe((value)=>{

    })
  }

  getDescription(value:string){
    if(value){
      this.despPara = value;
      //console.log("username:"+this.userNamePara);
    }
  }

  getHint(value: string) {
    if (this.catPara === 'demographic' && value) {
      this.hintPara = value;
    } else {
      this.hintPara = '';
    }
  }

  getOrder(value: number) {
    if(value) {
      this.orderPara = value;
    }
  }

  getType(value: string) {
    if (value) {
      this.typePara = value;
      if (this.typePara === "Text Input Question") {
        this.needAns = true;
        this.ansNumPara = 0;
      }
    }
  }

  getAnsNumber(value: number) {
    if (value) {
      this.ansNumPara = value;
      this.numbers = Array.apply(null, {length: this.ansNumPara}).map(Number.call, Number);
    }
  }

  getCategory(value: string) {
    if (value) {
      this.catPara = value;
    }
    if (this.catPara === 'demographic') {
      this.getDemoQuestions();
    } else {
      this.getQuestionnaire();
    }
  }

  getSubdomain(value: string) {
    if (this.catPara === 'questionnaire' && value) {
      this.subdomainPara = value;
    } else {
      this.subdomainPara = '';
    }
  }

  getDomain(value: string) {
    if (this.catPara === 'questionnaire' && value) {
      this.domainPara = value;
    } else {
      this.domainPara = '';
    }
  }

  ansArray: answers[] = [];

  keyArray: string[] = [];
   getKey(value: string) {
     if(value) {
       this.keyPara = value;
       this.keyArray.push(this.keyPara);
     }

   }

  valueArray: string[] = [];
  getValue(value: string) {
    if (value) {
      this.valuePara = value;
      this.valueArray.push(this.valuePara)
    }
  }

   // getAns() {
   //  console.log(this.keyArray);
   //  for (var i = 1; i < this.ansNumPara; i++) {}
   //       let ans : answers;
   //        ans.setKey(this.keyArray[i]);
   //        ans.setValue(this.valueArray[i]);
   //        this.ansArray.push(ans);
   //        console.log(this.ansArray);
   //  }

  addQues(): void {
    console.log(this.keyArray);
    console.log(this.valueArray);
    //this.getAns();
    if (this.catPara === 'demographic') {
      const newDemoQues = new DemoQuestion({
        label: this.despPara,
        order: this.orderPara,
        questiontype: this.typePara,
        placeholder: this.hintPara,
        options: this.ansArray,
      });
      this.demoService.addDemoQues(newDemoQues)
        .subscribe(ques => this.questions.push(ques));

    } else {
      const newQuestion = new Questionnare({
        label: this.despPara,
        order: this.orderPara,
        questiontype: this.typePara,
        options: this.ansArray,
        domain: this.domainPara,
        subdomain: this.subdomainPara
      });
      this.demoService.addQuestionnaire(newQuestion)
        .subscribe(ques => this.questionnaires.push(ques));
    }

    this.confirm = true;
    // this.createQuesForm.reset();
    }

    reset() {
      //this.createQuesForm.reset();
        window.location.reload();
    }

}

export const questionType = [
  {value: 'Radio Button Question', viewValue:'Radio Button Question'},
  {value: 'Text Input Question', viewValue:'Text Input Question'},
  {value: 'Dropdown List Question', viewValue:'Dropdown List Question'},
];

export const category = [
  {value: 'demographic', viewValue: 'demographic'},
  {value: 'questionnaire', viewValue: 'questionnaire'},
];

export const domains = [
  {value: 'Physical', viewValue: 'Physical domain'},
  {value: 'Behavioral', viewValue: 'Behavioral domain'},
  {value: 'Relational', viewValue: 'Relational domain'},
  {value: 'Spiritual', viewValue: 'Spiritual domain'},
  {value: 'Socio-ecnomic', viewValue: 'Socio-ecnomic domain'}
]

export class answers {
  key: string;
  value: string;

  constructor(options: {
    key?: string;
    value?: string;
  } = {}) {
    this.key = options.key || '';
    this.value = options.value || '';
  }

  setKey(key: string) {
    this.key = key;
  }

  setValue(value: string) {
    this.value = value;
  }
}
