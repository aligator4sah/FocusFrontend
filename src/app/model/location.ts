export class State {
  id: number;
  state: string;
}

export class County {
  id: number;
  county: string;
  state: number;
}

export class City {
  id: number;
  city: string;
  county: number;
}

export class Community {
  id: number;
  community: string;
  city: number;
  constructor(options: {
    id?: number;
    community?: string;
    city?: number;
  } = {}) {
    this.id = options.id;
    this.community = options.community;
    this.city = options.city;
  }
}

export class Block {
  id: number;
  block: string;
  community: number;
  startstreet: string;
  endstreet: string;
  zipcode: string;

  constructor(options: {
    id?: number;
    block?: string;
    community?: number;
    startstreet?: string;
    endstreet?: string;
    zipcode?: string
  } = {}) {
    this.id = options.id;
    this.block = options.block;
    this.community = options.community || -1;
    this.startstreet = options.startstreet || '';
    this.endstreet = options.endstreet || '';
    this.zipcode = options.zipcode || '';
  }
}

export class Family {
  id: number;
  family: string;
  block: number;
  constructor(options: {
    id?: number;
    family?: string;
    block?: number;
  } = {}) {
    this.id = options.id;
    this.family = options.family;
    this.block = options.block || -1;
  }
}

export class LocInfo {
  community: string;
  city: string;
  county: string;
  state: string;
}


export class ComInfo {
  id: number;
  community: string;
}
