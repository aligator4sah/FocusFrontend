export class State {
  id: number;
  state: string;
}

export class County {
  id: number;
  county: string;
  stateId: number;
}

export class City {
  id: number;
  city: string;
  countyId: number;
}

export class Community {
  id: number;
  community: string;
  cityId: number;
  constructor(options: {
    id?: number;
    community?: string;
    cityId?: number;
  } = {}) {
    this.id = options.id;
    this.community = options.community;
    this.cityId = options.cityId;
  }
}

export class Block {
  id: number;
  block: string;
  communityId: number;
  startStr: string;
  endStr: string;
  zipcode: string;

  constructor(options: {
    id?: number;
    block?: string;
    communityId?: number;
    startStr?: string;
    endStr?: string;
    zipcode?: string
  } = {}) {
    this.id = options.id;
    this.block = options.block;
    this.communityId = options.communityId || -1;
    this.startStr = options.startStr || '';
    this.endStr = options.endStr || '';
    this.zipcode = options.zipcode || '';
  }
}

export class Family {
  id: number;
  family: string;
  blockId: number;
  constructor(options: {
    id?: number;
    family?: string;
    blockId?: number;
  } = {}) {
    this.id = options.id;
    this.family = options.family;
    this.blockId = options.blockId || -1;
  }
}
