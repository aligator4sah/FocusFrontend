import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from "../../../../service/user.service";
import {CommunityAdmin} from "../../../../model/User";
import {StateService} from "../../../../service/state.service";

@Component({
  selector: 'app-com-admin-list',
  templateUrl: './com-admin-list.component.html',
  styleUrls: ['./com-admin-list.component.css']
})
export class ComAdminListComponent implements OnInit {
  displayedColumns = [];
  curRole = JSON.parse(localStorage.getItem('curUser'));
  dataSource = null;
  admins: CommunityAdmin[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private comAdminService: UserService,
    private stateService: StateService,
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.subProfileRole$.next("Community Administrator")
    });
    if (this.curRole.role === "System Administrator") {
      this.displayedColumns = ['username', 'firstName', 'lastName', 'phone', 'email', 'city', 'community', 'state'];
    } else if (this.curRole.role === "State Administrator") {
      this.displayedColumns = ['username', 'firstName', 'lastName', 'phone', 'email', 'city', 'community', 'edit']
    }
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */

  /**TODO: get community by all and by state */
  ngAfterViewInit() {
    this.getComAdmin();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getComAdmin() {
    if (this.curRole.role === "System Administrator") {
      this.comAdminService.getComAdmin()
        .subscribe(admin => {
          this.admins = admin;
          this.dataSource = new MatTableDataSource(this.admins);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    } else {
      this.comAdminService.getComAdminByState(this.curRole.location)
        .subscribe(admin => {
          this.admins = admin;
          this.dataSource = new MatTableDataSource(this.admins);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }

  }
}
