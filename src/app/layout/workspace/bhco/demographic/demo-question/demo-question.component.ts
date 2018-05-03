import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DropdownQuestion, QuestionBase, RadioQuestion, TextboxQuestion} from '../../../../../model/questionBase';
import {FormBuilder, FormControl, FormGroup, Validator} from '@angular/forms';
import {InputAttributes, RadioAttributes, SelectAttributes} from '../../../../../shared/shared-control/attributes';
import 'rxjs/add/operator/debounceTime';
import {fn} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-demo-question',
  templateUrl: './demo-question.component.html',
  styleUrls: ['./demo-question.component.css']
})
export class DemoQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Output() getAns = new EventEmitter<AnswerItem>();

  textAns: string;
  selectAns: string;
  radioAns: string;
  userid = JSON.parse(localStorage.getItem('curMem')).id;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  constructor(
    private fb: FormBuilder,
  ) {
    function handler(){

    }
    // this.form.controls["aaa"].valueChanges.subscribe(handler)
    // this.form.controls["bbb"].valueChanges.subscribe(handler)
  }

  buildForm() {
   //  this.form = this.fb.group({textQue: [''], selectQue: [''], radioQue: ['']});

   // this.form.controls["textQue"].valueChanges.debounceTime(200).subscribe((value) => {this.textAns = value});

    //this.getTextAnswer();

  }

  ngOnInit() {
    this.buildForm();
  }



  getTextAnswer(text: string) {
    console.log(typeof(text));
    if (typeof this.textAns !== "undefined") {
     let ansItem = new AnswerItem({
        userid: this.userid,
        questionid: parseInt(this.question.key),
        answer: this.textAns,
      });
      console.log(this.textAns);
      this.getAns.emit(ansItem);
    }
  }

  getSelectAnswer(select: string) {
    if (typeof select !== "undefined") {
      console.log(select);
      let ansItem = new AnswerItem({
        userid: this.userid,
        questionid: parseInt(this.question.key),
        answer: select,
      });
      this.getAns.emit(ansItem);
    }
  }

  getRadioAnswer() {
    if (typeof this.radioAns !== "undefined") {
      let ansItem = new AnswerItem({
        userid: this.userid,
        questionid: parseInt(this.question.key),
        answer: this.radioAns,
      });
      this.getAns.emit(ansItem);
    }
  }

}

export class AnswerItem {
  userid: number;
  questionid: number;
  answer: string;
  constructor(options: {
    userid?: number,
    questionid?: number,
    answer?: string,
  } = {}) {
    this.userid = options.userid;
    this.questionid = options.questionid;
    this.answer = options.answer;
  }
}
