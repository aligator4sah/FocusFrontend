import { Component, OnInit } from '@angular/core';
import {Domain, Subdomain} from "../../model/questionBase";
import {QuestionService} from "../../shared/shared-control/question.service";
import {QuestionModelService} from "../../service/question-model.service";
import {InputAttributes} from "../../shared/shared-control/attributes";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-domain',
  templateUrl: './create-domain.component.html',
  styleUrls: ['./create-domain.component.css']
})
export class CreateDomainComponent implements OnInit {

  public domGroup: FormGroup;
  public subdomGroup: FormGroup;

  domains: Domain[];
  subdomains: Subdomain[];
  existSubdom: boolean = false;

  newDomain: boolean = false;
  newSub: boolean = false;

  domainPara: string;
  subdomainPara: string;

  inputDomain: InputAttributes = {name: 'domain', type:'text', placeholder:'Please Input Domain Name', min: 3, max: 20};
  inputSubdomain: InputAttributes = {name: 'subdomain', min: 4, max: 32, placeholder:'Please Input Subdomain name', type: 'text'};

  constructor(
    private domService: QuestionModelService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getDomains();
    this.buildForm();
  }

  buildForm(): void {
    this.domGroup = this.fb.group({domain:['',[Validators.required,Validators.minLength(4)]]});
    this.subdomGroup = this.fb.group({subdomain: ['', [Validators.required, Validators.minLength(4)]]})
  }

  /**GET all domains from server */
  getDomains() {
    this.domService.getDomain()
      .subscribe(doms => {
        this.domains = doms;
      });
  }

  getSubdomains(domId: number) {
    this.domService.getSubdomainByDomain(domId)
      .subscribe(sub => {
        this.subdomains = sub;
        if (this.subdomains.length > 0) {
          this.existSubdom = true;
        }
      })
  }

  /**get new domain name from user */
  getDomain(value: string) {
    if(value) {
      this.domainPara = value;
    }
  }

  getSubdomain(value: string) {
    if (value) {
      this.subdomainPara = value;
    }
  }

  needNew() {
    this.newDomain = !this.newDomain;
  }

  addDomain() {
      const newDomain = new Domain({
        domain: this.domainPara,
      });

      this.domService.addDomain(newDomain)
        .subscribe(dom => this.domains.push(dom));

      this.domGroup.reset();
      this.newDomain = false;
  }



  /** parameter used for later*/
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
