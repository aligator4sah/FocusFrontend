import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from "@angular/cdk/collections";
import {Angular2Csv} from "angular2-csv";
import {QuestionModelService} from "../../../../../service/question-model.service";

@Component({
  selector: 'app-questionnaire-ans-table',
  templateUrl: './questionnaire-ans-table.component.html',
  styleUrls: ['./questionnaire-ans-table.component.css']
})
export class QuestionnaireAnsTableComponent implements OnInit{
  @Input() category: string;

  member = JSON.parse(localStorage.getItem('curMem'));
  session = JSON.parse(localStorage.getItem('curSession'));

  displayedColumns = [];
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  items: any[] = [];
  demoItems: any[] = [];
  questionItems: any[] = [];

  users: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private questionService: QuestionModelService
  ) {

  }

  ngOnInit() {
    if (this.category === "demographic") {
      this.getUserDemographicAnswer();
      this.displayedColumns = ['id', 'description', 'answer'];
    } else {
      this.getUserQuestionnaireAns();
      this.displayedColumns = ['id', 'description', 'answer', 'subdomain', 'domain', 'weight'];
    }
  }


  getUserDemographicAnswer() {
    this.questionService.getDemoAnsByUserId(this.member.id).subscribe(value => {
      this.items = value;
      this.transformToTable();
      this.dataSource = new MatTableDataSource<any>(this.demoItems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  transformToTable() {
    this.items.forEach(answer => {
      let item = {id: answer.questionid, label: answer.demographicQuestionnaire[0].label, result: answer.answer};
      this.demoItems.push(item);
    });
  }

  getUserQuestionnaireAns() {
    this.questionService.getAnsBySession(this.session.id).subscribe(value => {
      this.items = value;
      this.transformQuestionnaire();
      this.dataSource = new MatTableDataSource<any>(this.questionItems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  transformQuestionnaire() {
    this.items.forEach(item => {
      let ans = {id: item.answer.questionid, label: item.questionnaire.label, result: item.answer.answer.answer, domain: item.answer.domain, subdomain: item.questionnaire.subdomain.subdomain, weight: item.questionnaire.weight};
      this.questionItems.push(ans);
    });
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  download() {
    if (this.category === "demographic") {
      new Angular2Csv(this.demoItems, 'User-demographic-' + this.member.id);
    } else {
      new Angular2Csv(this.questionItems, 'User-Questionnaire-Session-'+this.session.id)
    }
  }

  back() {
    window.history.back();
  }
}
