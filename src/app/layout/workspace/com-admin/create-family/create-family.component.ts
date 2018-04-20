import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InputAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import { Block} from '../../../../shared/shared-control/attributes';
@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {

  public familyGroup: FormGroup;
  public blocks = Block;

  public inputAddress1: InputAttributes = {name:'address1', min:4,max:32, placeholder:'Address One', type:'text'};
  public inputAddress2: InputAttributes = {name:'address2', min:4, max: 32, placeholder:'Address Two', type:'text'};
  public selectBlock :SelectAttributes = {name:'block',roles:this.blocks,placeholder:'Select Block'};
  public inputFamily : InputAttributes = {name:'family',min:4,max:32,placeholder:'Family Last Name',type:'text'};

  //
  blockPara :string;
  familyPara: string;
  address1Para: string;
  address2Para: string;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.familyGroup = this.fb.group({
      block: ['', [Validators.required]],
      family:['',[Validators.required,Validators.minLength(4)]],
      address1:['',[Validators.required,Validators.minLength(4)]],
      address2:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  getBlock(value:string){
    if(value){
      this.blockPara = value;
      console.log("username:"+this.blockPara);
    }
  }

  getFamily(value:string){
    if(value){
      this.familyPara = value;
      console.log("username:"+this.familyPara);
    }
  }

  getAddress1(value: string) {
    if (value) {
      this.address1Para = value;
    }
  }

  getAddress2(value: string) {
    if (value) {
      this.address2Para = value;
    }
  }
}
