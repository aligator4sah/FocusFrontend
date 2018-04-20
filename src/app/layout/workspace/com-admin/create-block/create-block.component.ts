import { Component, OnInit } from '@angular/core';
import {Block, InputAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-block',
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.css']
})
export class CreateBlockComponent implements OnInit {
  public blockGroup: FormGroup;
  public blocks = Block;

  public inputBlock : InputAttributes = {name: 'block', min:4, max:32, placeholder:'Block Name', type:"text"};
  public selectStreet: SelectAttributes = {name: 'street', roles: this.blocks, placeholder:'Street Name'};
  public inputStart: InputAttributes = {name: 'start', min:1, max:10,placeholder:'Street Start Number', type:'text'};
  public inputEnd: InputAttributes = {name: 'end', min:1, max:10,placeholder:'Street End Number', type:'text'};
  public inputZipcode: InputAttributes = {name:'zipcode', min:5, max:5,placeholder:'Zipcode', type:'text'}


  public selectBlock :SelectAttributes = {name:'block',roles:this.blocks,placeholder:'block'};
  public inputFamily : InputAttributes = {name:'family',min:4,max:32,placeholder:'family',type:'text'};

  //
  blockPara :string;
  streetPara: string;
  startPara: string;
  endPara: string;
  zipcodePara: string;
  familyPara: string;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.blockGroup = this.fb.group({
      block: ['', [Validators.required, Validators.minLength(4)]],
      street: ['', [Validators.required]],
      start: ['', [Validators.required, Validators.minLength(4)]],
      end: ['', [Validators.required, Validators.minLength(4)]],
      zipcode:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  getBlock(value:string){
    if(value){
      this.blockPara = value;
      console.log("block:"+this.blockPara);
    }
  }

  getStreet(value: string) {
    if (value) {
      this.streetPara = value;
    }
  }

  getStart(value: string){
    if (value) {
      this.startPara = value;
    }
  }

  getEnd(value: string) {
    if (value) {
      this.endPara = value;
    }
  }

  getZip(value: string){
    if (value) {
      this.zipcodePara = value;
    }
  }

  getFamily(value:string){
    if(value){
      this.familyPara = value;
      console.log("username:"+this.familyPara);
    }
  }

}
