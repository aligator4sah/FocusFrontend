import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {StateAdmin} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";
import {StateService} from "../../../../service/state.service";

@Component({
  selector: 'app-state-admin-list',
  templateUrl: './state-admin-list.component.html',
  styleUrls: ['./state-admin-list.component.css']
})
export class StateAdminListComponent implements OnInit{

  displayedColumns = ['username', 'firstName', 'lastName', 'phone', 'email', 'state', 'edit'];
  dataSource = null;

  admins: StateAdmin[];
  value = ' ';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private stateAdminService: UserService,
    private stateService: StateService
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.subProfileRole$.next("State Administrator");
    });
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.getStateAdmin();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getStateAdmin() {
    this.stateAdminService.getStateAdmin().
      subscribe(admin => {
        this.admins = admin;
        this.dataSource = new MatTableDataSource(this.admins);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    })
  }


  //filter bar with chips
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  states = [
    { name: 'Pennsylvania' },
    { name: 'New York' },
  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.states.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.states.indexOf(fruit);

    if (index >= 0) {
      this.states.splice(index, 1);
    }
  }
}
