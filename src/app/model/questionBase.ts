export class Question {
  id: number;
  label: string;
  options: any;
  order: number;
  questiontype: string;
  constructor(options: {
    id?: number;
    label?: string;
    options?: any;
    order?: number;
    questiontype?: string;
  } = {}) {
      this.id = options.id;
      this.label = options.label || '';
      this.options = options.options || '';
      this.order = options.order;
      this.questiontype = options.questiontype || '';
  }
}

export class DemoQuestion extends Question {
  placeholder: string;
  constructor(options: {} = {}) {
    super(options);
    this.placeholder = options['placeholder'] || '';
  }
}

export class Questionnare extends Question {
  domain: any;
  subdomain: any;
  weight: number;
  constructor(options: {} = {}) {
    super(options);
    this.domain = options['domain'] || -1;
    this.subdomain = options['subdomain'] || -1;
    this.weight = options["weight"] || -1;
  }
}

export class SessionQue extends Questionnare {
  answer: any;
  constructor(options: {} = {}) {
    super(options);
    this.answer = options['answer'] || {};
  }
}

export class QuestionBase<T> {
  id: number;
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  domain: any;
  subdomain: any;
  description: string;
  constructor(options: {
    id?: number,
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string
    domain?: any,
    subdomain?: any,
    description?: string
  } = {}) {
    this.id = options.id || 1;
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = options.required || false;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.domain = options.domain || '';
    this.subdomain = options.subdomain || '';
    this.description = options.description || ''
  }
}

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radiobutton';
  options: {value: string}[] = [];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: {value: string, viewValue: string}[] = [];
  placeholder: string;
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

export class Domain {
  id: number;
  domain: string;
  weight: number;
  maxScore: number;
  minScore: number;

  constructor(options: {
    id?: number,
    domain?: string,
    weight?: number;
    maxScore?: number,
    minScore?: number,
  } = {}) {
    this.id = options.id;
    this.domain = options.domain;
    this.maxScore = options.maxScore || 0;
    this.minScore = options.minScore || 0;
    this.weight = options.weight || 0;
  }
}

export class Subdomain {
  id: number;
  subdomain: string;
  isolate: boolean;
  domainId: number;

  constructor(options: {
    id?: number,
    subdomain?: string,
    isolate?: boolean,
    domainId?: number,
  } = {}) {
    this.id = options.id;
    this.subdomain = options.subdomain;
    this.isolate = options.isolate || false;
    this.domainId = options.domainId || -1;
  }
}

export class Answer {
  questionid: number;
  answer: string;
  domain: string;
  weight: number;
  point: number;
  constructor(options: {
    questionid?: number,
    answer?: string,
    domain?: string,
    weight?: number,
    point?: number,
  } = {}) {
    this.questionid = options.questionid;
    this.answer = options.answer || "";
    this.domain = options.domain;
    this.weight = options.weight;
    this.point = options.point || 0;
  }
}

export class Session {
  id: number;
  userid: number;
  answer: any[];
  createdate: string;
  updatedate: string;
  constructor(options: {
    id?: number,
    userid?: number,
    answer?: any[],
    createdate?: string,
    updatedate?: string,
  } = {}) {
    this.id = options.id;
    this.userid = options.userid;
    this.answer = options.answer || [];
    this.createdate = options.createdate || '';
    this.updatedate = options.updatedate || '';
  }
}

export class SocialAnswer {
  id: number;
  sessionid: number;
  userid: number;
  questionid: number;
  firstname: string;
  midname: string;
  lastname: string;
  order: number;
  relationship: number;
  blockid: number;
  constructor(options: {
    id?: number;
    sessionid?: number;
    userid?: number;
    questionid?: number;
    firstname?: string;
    midname?: string;
    lastname?: string;
    order?: number;
    relationship?: number;
    blockid?: number;
  } = {}) {
    this.id = options.id;
    this.sessionid = options.sessionid || -1;
    this.userid = options.userid || -1;
    this.questionid = options.questionid || -1;
    this.firstname = options.firstname || '';
    this.midname = options.midname || '';
    this.lastname = options.lastname || '';
    this.order = options.order || -1;
    this.relationship = options.relationship || -1;
    this.blockid = options.blockid || -1;
  }
}

export class questionList {
  selectedDomain: any;
  resultSubdomains: any;
}
