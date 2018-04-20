import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {role, SelectAttributes} from '../../../../shared/shared-control/attributes';
import {SelectionModel} from '@angular/cdk/collections';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../../../service/user.service";
import {Bhcos, Member} from "../../../../model/User";
import {baseBuildCommandOptions} from "@angular/cli/commands/build";

@Component({
  selector: 'app-assign-member',
  templateUrl: './assign-member.component.html',
  styleUrls: ['./assign-member.component.css']
})
export class AssignMemberComponent implements OnInit{
  public forms: FormGroup;
  members: Member[];
  bhcos: Bhcos[];
  candidate: role[] = [];

  public selectBhco :SelectAttributes = {name:'bhco',roles:this.candidate, placeholder:'Select a BHCO'};

  displayedColumns = ['select', 'name', 'firstname', 'lastname', 'gender', 'dob', 'phone', 'address', 'zipcode'];
  dataSource = null;
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public fb: FormBuilder,
    private assignService: UserService
  ) {

  }

  ngOnInit() {
    //this.buildForm();
    this.forms = this.fb.group({
      'bhco': ['', [Validators.required]]
    })
    this.getBhcos();
  }

  buildForm(): void {
    this.forms = this.fb.group({
      'bhco': ['', [Validators.required]]
    })
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.getMembers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

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

  getMembers() {
    this.assignService.getMembers()
      .subscribe(mems => {
        this.members = mems
        this.dataSource = new MatTableDataSource(this.members);
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      });
  }

  getBhcos() {
    this.assignService.getBhcos()
      .subscribe(bhco => {
        this.bhcos = bhco
        for(let per of this.bhcos) {
            let can = new role({value: per.username, viewValue: per.username});
            // console.log(can);
            this.candidate.push(can);
        }
      });
  }
}
