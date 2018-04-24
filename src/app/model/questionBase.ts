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
  domain: string;
  subdomain: string;
  weight: number;
  constructor(options: {} = {}) {
    super(options);
    this.domain = options['domain'] || '';
    this.subdomain = options['subdomain'] || '';
    this.weight = options["weight"] || -1;
  }
}


export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  domain: string;
  subdomain: string;
  description: string;
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string
    domain?: string,
    subdomain?: string,
    description?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
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

