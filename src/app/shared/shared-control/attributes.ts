export interface RadioAttributes{
  name: string;
  options: {};
}

export interface InputAttributes {
  name:string;
  min:Number;
  max:Number;
  placeholder: string;
  type: string;
}


export interface defaultAttributes{
  name:string;
  value:string;
  type:string;
  placeholder: string;
}

export interface CheckAttributes{
  name:string;
  placeholder:string;
}

export interface SelectAttributes{
  name:string;
  roles: {};
  placeholder: string;
}

export interface validationTool{
  QNumber: number;
  QTitle: string;
}

export class role {
  value: string;
  viewValue: string;
  constructor(options: {
    value?: string;
    viewValue?: string;
  } = {}) {
    this.value = options.value;
    this.viewValue = options.viewValue;
  }
}

export class roleNum {
  value: number;
  viewValue: string;
  constructor(options: {
    value?: number;
    viewValue?: string;
  } = {}) {
    this.value = options.value;
    this.viewValue = options.viewValue;
  }
}



export const Admins =  [
  {value: 'system', viewValue: 'System'},
  {value: 'state', viewValue: 'State'},
  {value: 'community', viewValue: 'Community'}
];


export const States = [
  {value: 'Alabama', viewValue: 'Alabama'},
  {value: 'Alaska', viewValue: 'Alaska'},
  {value: 'Arizona', viewValue: 'Arizona'},
  {value: 'Arkansas', viewValue: 'Arkansas'},
  {value: 'California', viewValue: 'California'},
  {value: 'Colorado', viewValue: 'Colorado'},
  {value: 'Connecticut', viewValue: 'Connecticut'},
  {value: 'Delaware', viewValue: 'Delaware'},
  {value: 'Florida', viewValue: 'Florida'},
  {value: 'Georgia', viewValue: 'Georgia'},
  //
  {value: 'Hawaii', viewValue: 'Hawaii'},
  {value: 'Idaho', viewValue: 'Idaho'},
  {value: 'Illinois', viewValue: 'Illinois'},
  {value: 'Indiana', viewValue: 'Indiana'},
  {value: 'Iowa', viewValue: 'Iowa'},
  {value: 'Kansas', viewValue: 'Kansas'},
  {value: 'Kentucky', viewValue: 'Kentucky'},
  {value: 'Louisiana', viewValue: 'Louisiana'},
  {value: 'Maine', viewValue: 'Maine'},
  {value: 'Maryland', viewValue: 'Maryland'},
  //
  {value: 'Massachusetts', viewValue: 'Massachusetts'},
  {value: 'Michigan', viewValue: 'Michigan'},
  {value: 'Minnesota', viewValue: 'Minnesota'},
  {value: 'Mississippi', viewValue: 'Mississippi'},
  {value: 'Missouri', viewValue: 'Missouri'},
  {value: 'Montana', viewValue: 'Montana'},
  {value: 'Nebraska', viewValue: 'Nebraska'},
  {value: 'Nevada', viewValue: 'Nevada'},
  {value: 'New Hampshire', viewValue: 'New Hampshire'},
  {value: 'New Jersey', viewValue: 'New Jersey'},
  //
  {value: 'New Mexico', viewValue: 'New Mexico'},
  {value: 'New York', viewValue: 'New York'},
  {value: 'North Carolina', viewValue: 'North Carolina'},
  {value: 'North Dakota', viewValue: 'North Dakota'},
  {value: 'Ohio', viewValue: 'Ohio'},
  {value: 'Oklahoma', viewValue: 'Oklahoma'},
  {value: 'Oregon', viewValue: 'Oregon'},
  {value: 'Pennsylvania', viewValue: 'Pennsylvania'},
  {value: 'Rhode Island', viewValue: 'Rhode Island'},
  {value: 'South Carolina', viewValue: 'South Carolina'},
  //
  {value: 'South Dakota', viewValue: 'South Dakota'},
  {value: 'Tennessee', viewValue: 'Tennessee'},
  {value: 'Texas', viewValue: 'Texas'},
  {value: 'Utah', viewValue: 'Utah'},
  {value: 'Vermont', viewValue: 'Vermont'},
  {value: 'Virginia', viewValue: 'Virginia'},
  {value: 'Washington', viewValue: 'Washington'},
  {value: 'West Virginia', viewValue: 'West Virginia'},
  {value: 'Wisconsin', viewValue: 'Wisconsin'},
  {value: 'Wyoming', viewValue: 'Wyoming'},
];


export const Block = [
  {value: 'Apple', viewValue:'Apple'},
  {value: 'Orange', viewValue:'Orange'},
  {value: 'Banana', viewValue:'Banana'},
];

export const Family = [
  {value:'Alice', viewValue:'Alice'},
  {value:'Bob',viewValue:'Bob'},
  {value:'Cici',viewValue:'Cici'}
];


export const Gender = [
  {value:'Male',viewValue:'Male'},
  {value:'Female',viewValue:'Female'}
];


export const Race = [
  {value:'Caucasian',viewValue:'Caucasian'},
  {value:'African American',viewValue:'African American'},
  {value:'Hispanic',viewValue:'Hispanic'},
  {value:'Bi-Racial',viewValue:'Bi-Racial'},
  {value:'Asian',viewValue:'Asian'},
  {value:'White',viewValue:'White'},
  {value:'Other',viewValue:'Other'}
];

export const MaritalStatus = [
  {value:'Single',viewValue:'Single'},
  {value:'Married',viewValue:'Married'},
  {value:'Separated',viewValue:'Separated'},
  {value:'Divorced',viewValue:'Divorced'}
];


export const Education = [
  {value:'Did Not Complete High School',viewValue:'Did Not Complete High School'},
  {value:'High School/GED',viewValue:'High School/GED'},
  {value:'Some College',viewValue:'Some College'},
  {value:'Bachelor',viewValue:'Bachelor'},
  {value:'Master',viewValue:'Master'},
  {value:'Advanced Graduate Work ot h.D',viewValue:'Advanced Graduate Work ot h.D'}
];

export const Employment = [
  {value:'Currently Employed',viewValue:'Unemployed and Looking for Work'},
  {value:'Unemployed but Not Currently Looking for Work',viewValue:'Unemployed but Not Currently Looking for Work'},
  {value:'Student',viewValue:'Student'},
  {value:'Homemaker',viewValue:'Homemaker'},
  {value:'Retired',viewValue:'Retired'},
];

export const Relation = [
  {value:'family',viewValue:'Family'},
  {value:'friend',viewValue:'Friend'},
  {value:'co-worker',viewValue:'Co-worker'},
  {value:'other-Acquaintance',viewValue:'Other Acquaintance'}
];
