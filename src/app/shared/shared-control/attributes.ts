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

  findValue(num: number) {
    if (num == this.value) {
      return this.viewValue;
    } else {
      return null;
    }
  }
}



export const Admins =  [
  {value: 'system', viewValue: 'System'},
  {value: 'state', viewValue: 'State'},
  {value: 'community', viewValue: 'Community'}
];


export const States = [
  {id: 1, value: 'Alabama', viewValue: 'Alabama'},
  {id: 2, value: 'Alaska', viewValue: 'Alaska'},
  {id: 3, value: 'Arizona', viewValue: 'Arizona'},
  {id: 4, value: 'Arkansas', viewValue: 'Arkansas'},
  {id: 5, value: 'California', viewValue: 'California'},
  {id: 6, value: 'Colorado', viewValue: 'Colorado'},
  {id: 7, value: 'Connecticut', viewValue: 'Connecticut'},
  {id: 8, value: 'Delaware', viewValue: 'Delaware'},
  {id: 9, value: 'Florida', viewValue: 'Florida'},
  {id: 10, value: 'Georgia', viewValue: 'Georgia'},
  //
  {id: 11, value: 'Hawaii', viewValue: 'Hawaii'},
  {id: 12, value: 'Idaho', viewValue: 'Idaho'},
  {id: 13, value: 'Illinois', viewValue: 'Illinois'},
  {id: 14, value: 'Indiana', viewValue: 'Indiana'},
  {id: 15, value: 'Iowa', viewValue: 'Iowa'},
  {id: 16, value: 'Kansas', viewValue: 'Kansas'},
  {id: 17, value: 'Kentucky', viewValue: 'Kentucky'},
  {id: 18, value: 'Louisiana', viewValue: 'Louisiana'},
  {id: 19, value: 'Maine', viewValue: 'Maine'},
  {id: 20, value: 'Maryland', viewValue: 'Maryland'},
  //
  {id: 21, value: 'Massachusetts', viewValue: 'Massachusetts'},
  {id: 22, value: 'Michigan', viewValue: 'Michigan'},
  {id: 23, value: 'Minnesota', viewValue: 'Minnesota'},
  {id: 24, value: 'Mississippi', viewValue: 'Mississippi'},
  {id: 25, value: 'Missouri', viewValue: 'Missouri'},
  {id: 26, value: 'Montana', viewValue: 'Montana'},
  {id: 27, value: 'Nebraska', viewValue: 'Nebraska'},
  {id: 28, value: 'Nevada', viewValue: 'Nevada'},
  {id: 29, value: 'New Hampshire', viewValue: 'New Hampshire'},
  {id: 30, value: 'New Jersey', viewValue: 'New Jersey'},
  //
  {id: 31, value: 'New Mexico', viewValue: 'New Mexico'},
  {id: 32, value: 'New York', viewValue: 'New York'},
  {id: 33, value: 'North Carolina', viewValue: 'North Carolina'},
  {id: 34, value: 'North Dakota', viewValue: 'North Dakota'},
  {id: 35, value: 'Ohio', viewValue: 'Ohio'},
  {id: 36, value: 'Oklahoma', viewValue: 'Oklahoma'},
  {id: 37, value: 'Oregon', viewValue: 'Oregon'},
  {id: 38, value: 'Pennsylvania', viewValue: 'Pennsylvania'},
  {id: 39, value: 'Rhode Island', viewValue: 'Rhode Island'},
  {id: 40, value: 'South Carolina', viewValue: 'South Carolina'},
  //
  {id: 41, value: 'South Dakota', viewValue: 'South Dakota'},
  {id: 42, value: 'Tennessee', viewValue: 'Tennessee'},
  {id: 43, value: 'Texas', viewValue: 'Texas'},
  {id: 44, value: 'Utah', viewValue: 'Utah'},
  {id: 45, value: 'Vermont', viewValue: 'Vermont'},
  {id: 46, value: 'Virginia', viewValue: 'Virginia'},
  {id: 47, value: 'Washington', viewValue: 'Washington'},
  {id: 48, value: 'West Virginia', viewValue: 'West Virginia'},
  {id: 49, value: 'Wisconsin', viewValue: 'Wisconsin'},
  {id: 50, value: 'Wyoming', viewValue: 'Wyoming'},
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
