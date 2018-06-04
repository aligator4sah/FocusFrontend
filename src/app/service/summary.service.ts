import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'my-auth-token'
  })
}

@Injectable()
export class SummaryService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('SummaryService');
  }


  /** GET: Community summary application**/
  getMembersInCommunity(comId: number): Observable<any>{
    return this.http.get<any>(API_URL + '/communityAdmin/communityMemberInCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getMembersInCommunity', []))
      )
  }

  getBlocksInCommunity(comId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityAdmin/blocksInCurrentCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getBlocksInCommunity', []))
      )
  }

  getFamiliesInCommunity(comId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityAdmin/familyInCurrentCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getFamilyInCommunity', []))
      );
  }

  getGenderDisInCom(comId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityAdmin/communityMemberByGenderInCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getGenderDistribution', []))
      );
  }

  getRaceDisInCom(comId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityAdmin/communityMemberByRaceInCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getRaceDistribution', []))
      );
  }

  getMarryDisInCom(comId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityAdmin/communityMemberByMarryInCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getMarrayDistribution', []))
      );
  }

  getEducationDisInCom(comId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityAdmin/communityMemberByEducationInCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getEducationDis', []))
      );
  }

  getEmploymentsInCom(comId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityAdmin/communityMemberByEmploymentsInCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getEmploymentsDis', []))
      );
  }

  getAgeDisInCom(comId: number): Observable<any> {
    return this.http.get<any> (API_URL + '/communityAdmin/communityMemberByAgeDistributionInCommunity/' + comId)
      .pipe(
        catchError(this.handleError('getAgeDistribution', []))
      );
  }

}
