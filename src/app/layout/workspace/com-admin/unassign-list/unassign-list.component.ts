import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-unassign-list',
  templateUrl: './unassign-list.component.html',
  styleUrls: ['./unassign-list.component.css']
})
export class UnassignListComponent {

  displayedColumns = ['select', 'memberID', 'memberFirstName', 'memberLastName', 'bhcoID', 'bhcoFirstName', 'bhcoLastName'];
  dataSource: MatTableDataSource<relationData>;
  selection = new SelectionModel<relationData>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: relationData[] = [];
    for (let i = 1; i <= 50; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

}

/** Builds and returns a new User. */
function createNewUser(id: number): relationData {
  const name1 =
    MEMNAMES[Math.round(Math.random() * (MEMNAMES.length - 1))] + ' ' +
    MEMNAMES[Math.round(Math.random() * (MEMNAMES.length - 1))].charAt(0) + '.';

  const name2 =
    BHCONAMES[Math.round(Math.random() * (BHCONAMES.length - 1))] + ' ' +
    BHCONAMES[Math.round(Math.random() * (BHCONAMES.length - 1))].charAt(0) + '.';

  return {
    memID: id.toString(),
    memFirstName: FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    memLastName: LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))],
    bhcoID: BHCOID[Math.round(Math.random() * (BHCOID.length - 1))],
    bhcoFirstName: FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    bhcoLastName: LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const MEMNAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const BHCONAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia'];
const BHCOID = [12, 32, 45, 21, 2, 4];
const FIRSTNAME = ["John", "Tony", "Mia", "Allen", "Jerry", 'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia'];
const LASTNAME = ["Smith", "White", "Hunt", "Rains"];



export interface relationData {
  memID: string;
  memFirstName: string;
  memLastName: string
  bhcoID: number;
  bhcoFirstName: string;
  bhcoLastName: string;
}
