import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_URL} from "./http.service";
import {catchError} from "rxjs/operators";
import {Block, City, Community, County, Family} from "../model/location";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }
  )
}

@Injectable()
export class LocationService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('LocationService');
  }

  /** GET: get county by state, city by county, community by city, block and family by community */
  getCountyByState(stateId: number): Observable<County[]> {
    return this.http.get<County[]>(API_URL + '/county/state/' + stateId)
      .pipe(
        catchError(this.handleError('getCountyByState', []))
      );
  }

  getCityByCounty(countyId: number): Observable<City[]> {
    return this.http.get<City[]>(API_URL + '/city/county/' + countyId)
      .pipe(
        catchError(this.handleError('getCityByCounty', []))
      );
  }

  getCommunityByCity(cityId: number): Observable<Community[]> {
    return this.http.get<Community[]>(API_URL + '/community/city/' + cityId)
      .pipe(
        catchError(this.handleError('getCommunityByCity', []))
      );
  }

  getBlockByCommunity(comId: number): Observable<Block[]> {
    return this.http.get<Block[]>(API_URL + '/block/community/' + comId)
      .pipe(
        catchError(this.handleError('getBlockByCommunity', []))
      );
  }

  getFamilyByBlock(blockId: number): Observable<Family[]> {
    return this.http.get<Family[]>(API_URL + '/family/block' + blockId)
      .pipe(
        catchError(this.handleError('getFamilyByBlock', []))
      );
  }

  // TODO: get state, county, city from current community id

  /**For temporarily insert test use, delete later*/
  getAllCounty(): Observable<County[]> {
    return this.http.get<County[]>(API_URL + '/county')
      .pipe(
        catchError(this.handleError('getCountyByState', []))
      );
  }

  getAllCity(): Observable<City[]> {
    return this.http.get<City[]>(API_URL + '/city')
      .pipe(
        catchError(this.handleError('getCityByCounty', []))
      );
  }

  getAllCommunity(): Observable<Community[]> {
    return this.http.get<Community[]>(API_URL + '/community/')
      .pipe(
        catchError(this.handleError('getCommunityByCity', []))
      );
  }

  getAllBlock(): Observable<Block[]> {
    return this.http.get<Block[]>(API_URL + '/block')
      .pipe(
        catchError(this.handleError('getBlockByCommunity', []))
      );
  }

  getAllFamily(): Observable<Family[]> {
    return this.http.get<Family[]>(API_URL + '/family')
      .pipe(
        catchError(this.handleError('getFamilyByBlock', []))
      );
  }

  // getLocation(location: string, level: string): Observable<{}> {
  //   return this.http.get<any>(API_URL + '/${level}/${location}')
  //     .pipe(
  //       catchError(this.handleError('getLocation', []))
  //     );
  // }

  /** POST: add a new community, block or family to db*/
  addCommunity(com: Community): Observable<Community> {
    return this.http.post<Community>(API_URL + '/community', com, httpOptions)
      .pipe(
        catchError(this.handleError('addCommunity', com))
      );
  }

  addBlock(block: Block): Observable<Block> {
    return this.http.post<Block>(API_URL + '/block', block, httpOptions)
      .pipe(
        catchError(this.handleError('addBlock', block))
      );
  }

  addFamily(family: Family): Observable<Family> {
    return this.http.post<Family>(API_URL + '/family', family, httpOptions)
      .pipe(
        catchError(this.handleError('addFamily', family))
      );
  }

}
