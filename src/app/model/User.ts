import {ComInfo} from "./location";

export class User {
  id: number;
  username: string;
  password: string;
  firstname: string;
  midname: string;
  lastname: string;
  phone: string;
  email: string;
  constructor(options: {
    id?: number;
    username?: string;
    password?: string;
    firstname?: string;
    midname?: string;
    lastname?: string;
    phone?: string;
    email?: string;
  } = {} ) {
    this.id = options.id;
   this.username = options.username;
   this.firstname = options.firstname || '';
   this.midname = options.midname || '';
   this.lastname = options.lastname || '';
   this.password = options.password || '';
   this.phone = options.phone || '';
   this.email = options.email || '';
  }
}

export class StateAdmin extends User {
  state: string;
  constructor(options: {} = {}) {
    super(options);
    this.state = options['state'];
  }
}

export class CommunityAdmin extends User {
  state: string;
  county: string;
  city: string;
  community: string;
  constructor(options: {} = {}) {
    super(options);
    this.state = options['state'];
    this.county = options['county'];
    this.city = options['city'];
    this.community = options['community'];
  }
}

export class Member extends User{
  gender: string;
  date: string;
  addressone: string;
  addresstwo: string;
  family: string;
  block: string;
  community: any;
  city: string;
  county: string;
  state: string;
  race: string;
  marry: string;
  education: string;
  employments: string;
  assigned: boolean;
  bhco: any;

  constructor(options: {} = {}) {
      super(options);
      this.gender = options['gender'] || '';
      this.date = options['date'] || '';
      this.addressone = options['addressone'] || '';
      this.addresstwo = options['addresstwo'] || '';
      this.family = options['family'] || '';
      this.block = options['block'] || '';
      this.community = options['community'] || [];
      this.city = options['city'] || '';
      this.county = options['county'] || '';
      this.state = options['state'] || '';
      this.race = options['race'] || '';
      this.marry = options['marry'] || '';
      this.education = options['education'] || '';
      this.employments = options['employments'] || '';
      this.assigned = options['assigned'] || false;
      this.bhco = options['bhco'] || [];
  }
}

export class Bhcos extends User{
  community: string;
  city: string;
  county: string;
  state: string;
  constructor(options: {} = {} ) {
    super(options);
    this.community = options['community'] || '';
    this.city = options['city'] || '';
    this.county = options['county'] || '';
    this.state = options['state'] || '';
  }
}


export class CurrentUser {
  id: number;
  name: string;
  role: string;
  location: any;
  locName: string
  constructor(options: {
    id?: number;
    name?: string;
    role?: string;
    location?: any;
    locName?: string,
  } = {}) {
    this.id = options.id;
    this.name = options.name || '';
    this.role = options.role;
    this.location = options.location || [];
    this.locName = options.locName || "";
  }

  setName(userName: string): void {
    this.name = userName;
  }
}

export class CheckOpt extends Member {
  isChosen: boolean;
  constructor(options: {} = {}) {
    super(options);
    this.isChosen = options['isChosen'] || false;
  }
}
