import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  defaultAttributes, InputAttributes, roleNum,
  SelectAttributes
} from '../../../../shared/shared-control/attributes';
import {Family, Block} from "../../../../model/location";
import {LocationService} from "../../../../service/location.service";

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {

  // form group declaration
  public familyGroup: FormGroup;

  // get location id from local storage
  public locId = null;

  //get all blocks and community from server
  blocks: Block[];
  families: Family[];
  blockRole: roleNum[] = [];

  isBlock: boolean = false;
  confirmed: boolean = false;

  // public inputAddress1: InputAttributes = {name:'address1', min:4,max:32, placeholder:'Address One', type:'text'};
  // public inputAddress2: InputAttributes = {name:'address2', min:4, max: 32, placeholder:'Address Two', type:'text'};
  public selectBlock :SelectAttributes = {name:'block',roles:this.blockRole,placeholder:'Select the Block'};
  public inputFamily : InputAttributes = {name:'family',min:4,max:32,placeholder:'Input Family Name',type:'text'};
  public defaultBlock: SelectAttributes = {name:'dblock', roles: {}, placeholder:'No available blocks currently.'};
  public defaultFamily: defaultAttributes = {name: 'dfam', value: '', placeholder:'', type: 'text'};
  //
  blockPara : number;
  familyPara: string;
  address1Para: string;
  address2Para: string;

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
    this.familyGroup = this.fb.group({
      block: ['', [Validators.required]],
      family:['',[Validators.required,Validators.minLength(4)]],
      dblock: ['', []],
      dfam: ['', []]
    })
  }

  /** get all blocks and communities from the server*/
  getBlocks(loc: number) {
    this.locService.getBlockByCommunity(loc)
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


  getCommunities(loc: number) {
    this.locService.getFamilyByBlock(loc)
      .subscribe(fam => {this.families = fam});
  }


  /** get user input and pass to a new family */
  getBlock(value: number){
    if(value){
      this.blockPara = value;
      this.getCommunities(this.blockPara);
    }
  }

  getFamily(value:string){
    if(value){
      this.familyPara = value;
      console.log("familyName:"+this.familyPara);
    }
  }

  /** send add a new family request to the server*/
  addFamily() {
    const newFamily = new Family({
      family: this.familyPara,
      block: this.blockPara
    });
    this.locService.addFamily(newFamily)
      .subscribe(fam => this.families.push(fam));
    console.log(newFamily);
    this.confirmed = true;
  }
}
