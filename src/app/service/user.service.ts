import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {Observable} from "rxjs/Observable";
import {Bhcos, CommunityAdmin, Member, StateAdmin} from "../model/User";
import {catchError} from "rxjs/operators";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {httpFactory} from "@angular/http/src/http_module";
const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'my-auth-token'
  })
}

@Injectable()
export class UserService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  /** Get: get all members from the server*/
  // TODO: need to combine all the functions by features
  getUser (role: string): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/${role}')
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  /** GET get members according top different levels of admin */
  getAllMembers (): Observable<Member[]> {
    return this.http.get<Member[]>(API_URL + '/communityMember')
      .pipe(
        catchError(this.handleError('getMembers', []))
      );
  }

  getMembersByState(stateId: number): Observable<Member[]> {
    return this.http.get<Member[]>(API_URL + '/communityMemberByState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberByState', []))
      );
  }

  getMemberByCom(comId: number): Observable<Member[]> {
    return this.http.get<Member[]>(API_URL + '/communityMemberByCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getMemberByCommunity', []))
      );
  }

  /**GET get bhco according to different levels of admin */
  getBhcos (): Observable<Bhcos[]> {
    return this.http.get<Bhcos[]>(API_URL + '/bhco')
      .pipe(
        catchError(this.handleError('getBhco', []))
      );
  }

  getBhcoByState(staId: number): Observable<Bhcos[]> {
    return this.http.get<Bhcos[]>(API_URL + '/Bhco/State/' + staId)
      .pipe(
        catchError(this.handleError('getBhcoByState', []))
      );
  }

  getBhcoByCom(comId: number): Observable<Bhcos[]> {
    return this.http.get<Bhcos[]>(API_URL + '/Bhco/Community/' + comId)
      .pipe(
        catchError(this.handleError('getBhcoByCommunity', []))
      );
  }

  getComAdmin (): Observable<CommunityAdmin[]> {
    return this.http.get<CommunityAdmin[]>(API_URL + '/communityAdmin')
      .pipe(
        catchError(this.handleError('getComAdmin', []))
      );
  }

  getStateAdmin(): Observable<StateAdmin[]> {
    return this.http.get<StateAdmin[]>(API_URL + '/stateAdmin')
      .pipe(
        catchError(this.handleError('getStateAdmin', []))
      );
  }

  /** GET assigned and unassigned member*/
  getUnassignedMem(locId: number): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/unAssignedCommunityMember/' + locId)
      .pipe(
        catchError(this.handleError('getUnassigned', []))
      );
  }

  getAssignedMem(locId: number): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/AssignedCommunityMember/' + locId)
      .pipe(
        catchError(this.handleError('getAssignedMem', []))
      );
  }

  /** GET: get single member by id*/
  getMemberById(id: number): Observable<Member> {
    return this.http.get<any>(API_URL + '/communityMember/' + id)
      .pipe(
        catchError(this.handleError('getMemberById', []))
      );
  }

  /** POST: add a new member to the database*/
  addMember(mem : Member): Observable<Member> {
    console.log(mem);
    return this.http.post<Member>(API_URL + '/communityMember', mem, httpOptions)
      .pipe(
        catchError(this.handleError('addMember', mem))
      );
  }

  addBhco(bhco : Bhcos): Observable<Bhcos> {
    return this.http.post<Bhcos>(API_URL + '/bhco', bhco, httpOptions)
      .pipe(
        catchError(this.handleError('addBhco', bhco))
      );
  }

  addStateAdmin(stateAdmin: StateAdmin): Observable<StateAdmin> {
    return this.http.post<StateAdmin>(API_URL + '/stateAdmin', stateAdmin, httpOptions)
      .pipe(
        catchError(this.handleError('addComAdmin', stateAdmin))
      );
  }

  addComAdmin(comAdmin: CommunityAdmin): Observable<CommunityAdmin> {
    return this.http.post<CommunityAdmin>(API_URL + '/communityAdmin', comAdmin, httpOptions)
      .pipe(
        catchError(this.handleError('addComAdmin', comAdmin))
      );
  }
  /**PUT: update member on the server, return the updated member upon success*/
  updateMember(id: number): Observable<{}> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Member>(API_URL, id, httpOptions)
      .pipe(
        catchError(this.handleError('updateMember', id))
      );
  }

  /** PATCH assign and unassign member to bhco*/
  assignBHCO(bhcoId: number, relation: number[]): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'token');
    return this.http.patch<any>(API_URL + '/assign/CommunityMember/' + bhcoId, relation, httpOptions)
      .pipe(
        catchError(this.handleError('assignBhco', bhcoId))
      );
  }

  unassignBhco(relation: number[]): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'token');
    return this.http.patch<any>(API_URL + '/unAssign/CommunityMember/', relation, httpOptions)
      .pipe(
        catchError(this.handleError('unassignBhco', []))
      );
  }


  /**DELETE: delete a member from the server*/
  deleteMember(id: number): Observable<{}> {
    return this.http.delete(API_URL + 'communityMember/${id}', httpOptions)
      .pipe(
        catchError(this.handleError('deleteMember'))
      );
  }


  /** PATCH: update a me,ber */

}
