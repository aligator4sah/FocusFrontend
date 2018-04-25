import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CheckOpt, Member} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-unassign-list',
  templateUrl: './unassign-list.component.html',
  styleUrls: ['./unassign-list.component.css']
})
export class UnassignListComponent implements OnInit{

  displayedColumns = ['select', 'memberID', 'memberFirstName', 'memberLastName', 'bhcoID', 'bhcoFirstName', 'bhcoLastName'];
  dataSource = null;
  selection = new SelectionModel<any>(true, []);

  members: Member[];
  elements: CheckOpt[] = [];
  unassignMem: number[] = [];
  locId = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private unassignService: UserService
  ) {
  }

  ngOnInit() {
    this.locId = JSON.parse(localStorage.getItem('curUser')).location;
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

  getMembers() {
    this.unassignService.getAssignedMem(this.locId)
      .subscribe(mems => {
        this.elements = mems
        // for (let member of this.members) {
        //   const newElement = new CheckOpt(member);
        //   this.elements.push(newElement);
        // }
        this.dataSource = new MatTableDataSource(this.elements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  unAssign() {
    for (let ele of this.elements) {
      if (ele.isChosen == true) {
        this.unassignMem.push(ele.id);
      }
    }
    this.unassignService.unassignBhco(this.unassignMem)
      .subscribe(result => console.log(result));
    console.log(this.unassignMem);
    window.location.reload();
  }

}
