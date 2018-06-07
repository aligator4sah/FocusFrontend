import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {statsErrorsToString} from "@angular/cli/utilities/stats";

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

  /**GET: summary information for bhco **/
  getMemberNumberBhco(bhcoId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityMemberInBhco/' + bhcoId)
      .pipe(
        catchError(this.handleError('getMmeberNumberBhco', []))
      )
  }

  getMemberGenderBhco(bhcoId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityMemberByGenderInBhco/' + bhcoId)
      .pipe(
        catchError(this.handleError('getMemberGenderBhco', []))
      )
  }

  getMemberRaceBhco(bhcoId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityMemberByRaceInBhco/' + bhcoId)
      .pipe(
        catchError(this.handleError('getMemberRaceBhco', []))
      )
  }

  getMemberMarrayBhco(bhcoId: number): Observable<any> {
    return this.http.get<any> (API_URL + '/communityMemberByMarryInBhco/' + bhcoId)
      .pipe(
        catchError(this.handleError('getMemberMarryBhco', []))
      )
  }

  getMemberEducationBhco(bhcoId: number): Observable<any> {
    return this.http.get<any> (API_URL + '/communityMemberByEducationInBhco/' + bhcoId)
      .pipe(
        catchError(this.handleError('getMemberEducationBhco', []))
      )
  }

  getMemberEmployementsBhco(bhcoId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/communityMemberByEmploymentsInBhco/' + bhcoId)
      .pipe(
        catchError(this.handleError('getMemberEmploymentsBhco', []))
      )
  }

  getMemberAgeBhco(bhcoId: number): Observable<any> {
    return this.http.get<any> (API_URL + '/communityMemberByAgeDistributionInBhco/' + bhcoId)
      .pipe(
        catchError(this.handleError('getMemberDistributionBhco', []))
      )
  }

  /**GET: summry service for state administrator **/
  getMemberNumState(stateId: number): Observable<any> {
    return this.http.get<any> (API_URL + '/stateAdmin/communityMemberInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberNumberState', []))
      )
  }

  getMemberByCityInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByCityInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberByCityInState', []))
      )
  }

  getMemberByCountyInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByCountyInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberByCountyInState', []))
      )
  }

  getMemberByCommunityInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByCommunityInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberByCommunityInState', []))
      )
  }

  getBhcoNumberInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/bhcoInState/' + stateId)
      .pipe(
        catchError(this.handleError('getBhcoInState', []))
      )
  }

  getMemberByGenderInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByGenderInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberByGenderState', []))
      )
  }

  getMemberByRaceInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByRaceInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberByRaceState', []))
      )
  }

  getMemberByMarryInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByMarryInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberByMarryInState', []))
      )
  }

  getMemberByEducationInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByEducationInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberEducationInState', []))
      )
  }

  getMemberByEmploymentsInState(stateId: number): Observable<any> {
    return this.http.get<any> (API_URL + '/stateAdmin/communityMemberByEmploymentsInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberEmploymentsInState', []))
      )
  }

  getMemberByAgeInState(stateId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/stateAdmin/communityMemberByAgeDistributionInState/' + stateId)
      .pipe(
        catchError(this.handleError('getMemberAgeInState', []))
      )
  }


  /**GET: summary information for system administrator **/
  getMemberNumSys(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberInSystem/' + 0)
      .pipe(
        catchError(this.handleError('getMemberInSystem', []))
      )
  }

  getBhcoNumSys(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/bhcoInSystem/' + 0)
      .pipe(
        catchError(this.handleError('getBhcoInSystem', []))
      )
  }

  getMemberGroupByState(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByState/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByState', []))
      )
  }

  getMemberGroupByCommunity(): Observable<any> {
    return this.http.get<any> (API_URL + '/systemAdmin/communityMemberGroupByCommunity/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByCommunity', []))
      )
  }

  getMemberGroupByCity(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByCity/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByCity', []))
      )
  }

  getMemberGroupByGender(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByGender/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByGender', []))
      )
  }

  getMemberGroupByRace(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByRace/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByRace', []))
      )
  }

  getMemberGroupByMarry(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByMarry/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByMarry', []))
      )
  }

  getMemberGroupByEducation(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByEducation/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByEducation', []))
      )
  }

  getMemberGroupByEmployments(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByEmployments/' + 0)
      .pipe(
        catchError(this.handleError('getMemberGroupByEmployments', []))
      )
  }

  getMemberGroupByAge(): Observable<any> {
    return this.http.get<any>(API_URL + '/systemAdmin/communityMemberGroupByAge/' + 0)
      .pipe(
        catchError(this.handleError('getMemberByAge',[]))
      )
  }
}

