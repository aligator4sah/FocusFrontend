import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from "../../../../service/user.service";
import {Bhcos} from "../../../../model/User";
import {LocInfo} from "../../../../model/location";
import {LocationService} from "../../../../service/location.service";

@Component({
  selector: 'app-bhco-list',
  templateUrl: './bhco-list.component.html',
  styleUrls: ['./bhco-list.component.css']
})
export class BhcoListComponent implements OnInit{

  //displayedColumns = ['username', 'firstname', 'lastname', 'phone', 'email', 'city', 'community'];
  displayedColumns = [];
  dataSource = null;

  curRole = JSON.parse(localStorage.getItem('curUser'));
  locInfo: LocInfo;

  bhcos: Bhcos[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private bhcoService: UserService,
    private locService: LocationService
  ) {

  }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.getLocInfor();
    }

    if (this.curRole.role === "Community Administrator") {
      this.displayedColumns = ['username', 'firstname', 'lastname', 'phone', 'email'];
    } else if (this.curRole.role === "State Administrator") {
      this.displayedColumns = ['username', 'firstname', 'lastname', 'phone', 'email', 'community', 'city'];
    } else {
      this.displayedColumns = ['username', 'firstname', 'lastname', 'phone', 'email', 'community', 'city', 'state']
    }


  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.getBhco();
  }

  getLocInfor() {
    this.locService.getCommunityInfo(this.curRole.id)
      .subscribe(loc => {
        this.locInfo = loc;
        console.log(this.locInfo);
        localStorage.setItem('curLoc', JSON.stringify(this.locInfo));
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getBhco() {
    if (this.curRole.role === "System Administrator") {
      return this.bhcoService.getBhcos()
        .subscribe(bhco =>
        {this.bhcos = bhco
          this.dataSource = new MatTableDataSource(this.bhcos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });

    } else if (this.curRole.role === "State Administrator") {
      return this.bhcoService.getBhcoByState(this.curRole.location)
        .subscribe(bhco => {
          this.bhcos = bhco
          this.dataSource = new MatTableDataSource(this.bhcos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });

    } else {
      return this.bhcoService.getBhcoByCom(this.curRole.location)
        .subscribe(bhco => {
          this.bhcos = bhco
          this.dataSource = new MatTableDataSource(this.bhcos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }

  }
}
