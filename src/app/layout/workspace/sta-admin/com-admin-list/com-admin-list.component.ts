import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from "../../../../service/user.service";
import {CommunityAdmin} from "../../../../model/User";

@Component({
  selector: 'app-com-admin-list',
  templateUrl: './com-admin-list.component.html',
  styleUrls: ['./com-admin-list.component.css']
})
export class ComAdminListComponent {
  displayedColumns = ['username', 'firstName', 'lastName', 'phone', 'email', 'city', 'community'];
  dataSource = null;
  admins: CommunityAdmin[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private comAdminService: UserService
  ) {
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
    this.comAdminService.getComAdmin()
      .subscribe(admin => {
        this.admins = admin;
        this.dataSource = new MatTableDataSource(this.admins);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): ComAdminData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    username: name,
    firstName: FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    lastName: LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))],
    phone: PHONE[Math.round(Math.random() * (PHONE.length - 1))],
    email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
    city: CITY[Math.round(Math.random() * (CITY.length - 1))],
    community: COMMUNITY[Math.round(Math.random() * (COMMUNITY.length - 1))],
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const FIRSTNAME = ["John", "Tony", "Mia", "Allen", "Jerry", 'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia'];
const LASTNAME = ["Smith", "White", "Hunt", "Rains"];
const PHONE = ['412-392-2032', '412-363-8936', '220-384-8364', '412-384-9932'];
const EMAIL = ['dewo@gmail.com', 'aaaa@burst.com', 'fnie@outlook.com', 'dnwio@yahoo.com'];
// const STATE = ['Alaska', 'California', 'Florida', 'Georgia', 'North Carolina', 'New York'];
const CITY = ['Pittsburgh', 'Los Angels', 'New York', 'Seattle', 'Cleavland'];
const COMMUNITY = ['Clinton', 'Franklin', 'Madison', 'Bristol', 'GeorgeTown'];

export interface ComAdminData {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  community: string;
  color: string;
}
