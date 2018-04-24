import { Component, OnInit } from '@angular/core';
import {InputAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Block} from '../../../../model/location';
import {LocationService} from "../../../../service/location.service";

@Component({
  selector: 'app-create-block',
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.css']
})
export class CreateBlockComponent implements OnInit {
  // get the current community admin and location id
  public locId = null;

  //get block array from server;
  blocks: Block[];
  confirmed: boolean = false;

  // form group declaration
  public blockGroup: FormGroup;
  //public blocks = Block;

  public inputBlock : InputAttributes = {name: 'block', min:4, max:32, placeholder:'Block Name', type:"text"};
  // public selectStreet: SelectAttributes = {name: 'street', roles: this.blocks, placeholder:'Street Name'};
  public inputStart: InputAttributes = {name: 'start', min:1, max:32,placeholder:'Start Street', type:'text'};
  public inputEnd: InputAttributes = {name: 'end', min:1, max:32,placeholder:'End Street', type:'text'};
  public inputZipcode: InputAttributes = {name:'zipcode', min:5, max:5,placeholder:'Zipcode', type:'text'};

  // record the user inputs
  blockPara :string;
  startPara: string;
  endPara: string;
  zipcodePara: string;

  constructor(
    private fb: FormBuilder,
    private locService: LocationService
  ) { }

  ngOnInit() {
    this.buildForm();
    if (localStorage.length > 0) {
      this.locId = JSON.parse(localStorage.getItem('curUser')).location;
      this.getBlocks(this.locId);
    }
  }

  buildForm(): void {
    this.blockGroup = this.fb.group({
      block: ['', [Validators.required, Validators.minLength(4)]],
      start: ['', [Validators.required, Validators.minLength(4)]],
      end: ['', [Validators.required, Validators.minLength(4)]],
      zipcode:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  /**get blocks according to community from server */
  getBlocks(loc: number) {
    this.locService.getBlockByCommunity(loc)
      .subscribe(blo => {this.blocks = blo});
  }


  /**get input value from user and pass the value to create a new block */
  getBlock(value:string){
    if(value){
      this.blockPara = value;
      console.log("block:"+this.blockPara);
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

  /** send add block request to the server*/
  addBlock() {
    const newBlock = new Block({
      block: this.blockPara,
      startstreet: this.startPara,
      endstreet: this.endPara,
      zipcode: this.zipcodePara,
      community: this.locId,
    });
    this.locService.addBlock(newBlock)
      .subscribe(blo => this.blocks.push(blo));
    console.log(newBlock);
    this.confirmed = true;
  }


}
