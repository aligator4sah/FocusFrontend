import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from "../../../../service/user.service";
import {Bhcos} from "../../../../model/User";

@Component({
  selector: 'app-bhco-list',
  templateUrl: './bhco-list.component.html',
  styleUrls: ['./bhco-list.component.css']
})
export class BhcoListComponent {

  displayedColumns = ['username', 'firstname', 'lastname', 'phone', 'email', 'city', 'community'];
  dataSource = null;

  bhcos: Bhcos[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private bhcoService: UserService) {

  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.getBhco();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getBhco() {
    return this.bhcoService.getBhcos()
      .subscribe(bhco =>
      {this.bhcos = bhco
        this.dataSource = new MatTableDataSource(this.bhcos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}
