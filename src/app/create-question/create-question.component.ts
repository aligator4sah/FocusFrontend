import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {defaultAttributes, InputAttributes, roleNum, SelectAttributes} from "../shared/shared-control/attributes";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime'
import {DemoQuestion, Domain, Questionnare} from "../model/questionBase";
import {QuestionModelService} from "../service/question-model.service";
import {debounceTime} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})

export class CreateQuestionComponent implements OnInit {
  public createQuesForm: FormGroup;
  public ansGroup: FormGroup;

  options: options[] = [];
  domainRole: roleNum[] = [];

  public description : InputAttributes = {name:'desp',min:4,max:90,placeholder:'Please input question description', type: 'text'};
  public hints : InputAttributes = {name:'hint',min:4,max:90,placeholder:'Please input question indication', type: 'text'};
  public order: InputAttributes = {name: 'ord', min:1, max: 20, placeholder:'Please input question order', type: 'number'};
  public type :SelectAttributes = {name:'types',roles: questionType, placeholder:'Please Select question type'};
  public ansNumber: InputAttributes = {name: 'ansNo', min:1, max: 20, placeholder: 'Please input the number of answers', type: 'number'};
  public defaultAnsNo: defaultAttributes = {name: 'defaultAnsNo', value: '0', placeholder: 'No answer number needed', type: 'text'};

  public selectCategory: SelectAttributes = {name: 'cat', roles: category, placeholder: 'Please select the question category'};
  public selectDomain: SelectAttributes = {name: 'domain', roles: this.domainRole, placeholder: 'Please select domain'};
  public inputSubdomain: InputAttributes = {name: 'subdomain', min: 4, max: 20, placeholder:'Please input subdomain name', type: 'text'};
  public inputWeight: InputAttributes = {name:'weight', min: 1, max: 10, placeholder: 'Please input question weight',  type: 'text'};

  despPara: string;
  hintPara: string;
  orderPara: number;
  typePara: string;
  ansNumPara: number;
  catPara: string;
  domainPara: string;
  subdomainPara: string;
  weightPara: number;

  numbers: number[];
  domains: Domain[];
  questions: DemoQuestion[];
  questionnaires: Questionnare[];



  confirm: boolean = false;
  needAns: boolean = false;

  constructor(
    private fb: FormBuilder,
    private demoService: QuestionModelService,
    private router: Router
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
      weight: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.ansGroup = this.fb.group({});
    this.createQuesForm.controls["key"].valueChanges.debounceTime(200).subscribe((value)=>{

    })
  }

  getDescription(value:string){
    if(value){
      this.despPara = value;
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
      for (let num of this.numbers) {
          let opt = {key: '', value: ''};
          this.options.push(opt);
      }
      this.ansGroup = new FormGroup({ansKey: new FormControl(), ansValue: new FormControl()});
    }
  }

  getCategory(value: string) {
    if (value) {
      this.catPara = value;
      if (this.catPara === 'demographic') {
        this.getDemoQuestions();
      } else {
        this.getQuestionnaire();
        this.getDomains();
      }
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

  getWeight(value: number) {
    if(value) {
      this.weightPara = value;
    } else {
      this.weightPara = -1;
    }
  }


  addQues(): void {
    // console.log(this.keyArray);
    // console.log(this.valueArray);
    //this.getAns();
    console.log(this.options);
    if (this.catPara === 'demographic') {
      const newDemoQues = new DemoQuestion({
        label: this.despPara,
        order: this.orderPara,
        questiontype: this.typePara,
        placeholder: this.hintPara,
        options: this.options,
      });
      this.demoService.addDemoQues(newDemoQues)
        .subscribe(ques => this.questions.push(ques));

    } else {
      const newQuestion = new Questionnare({
        label: this.despPara,
        order: this.orderPara,
        questiontype: this.typePara,
        options: this.options,
        domain: this.domainPara,
        subdomain: this.subdomainPara,
        weight: this.weightPara
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

    getDomains() {
      this.demoService.getDomain()
        .subscribe(dom => {
          this.domains = dom;
          for (let domain of this.domains) {
            let role = new roleNum({value: domain.id, viewValue: domain.domain});
            this.domainRole.push(role);
          }
        });

    }

    createDomain() {
      this.router.navigateByUrl('/createQuestion/createDomain')
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

export class options {
  key: string;
  value: string;
}
