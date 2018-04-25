import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Member} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {merge} from "rxjs/observable/merge";
import {startWith} from "rxjs/operator/startWith";
import {switchMap} from "rxjs/operator/switchMap";
import {catchError} from "rxjs/operators";
import {map} from "rxjs/operator/map";
import {of as observableOf} from 'rxjs/observable/of';

@Component({
  selector: 'app-assign-table',
  templateUrl: './assign-table.component.html',
  styleUrls: ['./assign-table.component.css']
})
export class AssignTableComponent implements OnInit {

  displayedColumns = [];
  dataSource = null;
  curRole = JSON.parse(localStorage.getItem('curUser'));

  //TODO: change the dob display to age

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  members: Member[];

  constructor(
   private userService: UserService
  ) {

  }

  ngOnInit() {
    //this.getMember();
    if (this.curRole.role === "Community Administrator") {
      this.displayedColumns = ['name', 'firstname', 'lastname', 'gender', 'dob', 'phone', 'address', 'family', 'block'];
    } else if (this.curRole.role === "State Administrator") {
      this.displayedColumns = ['name', 'firstname', 'lastname', 'gender', 'dob', 'phone', 'address', 'community', 'city'];
    } else if (this.curRole.role === 'System Administrator') {
      this.displayedColumns = ['name', 'firstname', 'lastname', 'gender', 'dob', 'phone', 'address', 'community', 'state']
    }
  }

   getMember() {
     this.userService.getAllMembers()
       .subscribe(mems => {
         this.members = mems;
         console.log(this.members);
         this.dataSource = new MatTableDataSource(this.members);
         this.dataSource.paginator = this.paginator
         this.dataSource.sort = this.sort
       });
   }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.getMember();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
