import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {HttpParams} from '@angular/common/http/src/params';
import {HttpHeaders} from '@angular/common/http/src/headers';
import {CONST} from "./util";
import {LocalStorageService} from 'angular-2-local-storage';

export let API_URL: string;
if (environment.production) {
  API_URL = environment.apiUrl;
} else {
  API_URL = "http://localhost: 3000";
}

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) {
  }

  get(url,params:{[key:string]:any} = null, options: HttpOptions = {}) {
    options.params = params
    this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get(`${API_URL}/${url}`, options).toPromise();
  }

  getWithToken(url,params:{[key:string]:any} = null, options: HttpOptions = {}) {
    this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(CONST.LOCAL_STORAGE_TOKEN_KEY));
    return this.get(url,params, options);
  }

  post(url, body, options: HttpOptions = {}) {
    this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(`${API_URL}/${url}`, body, options).toPromise();
  }

  postDemo(url, body) {
    return this.httpClient.post(`${API_URL}/${url}`, body).toPromise();
  }

  postWithToken(url, body, options: HttpOptions = {}) {
    this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(CONST.LOCAL_STORAGE_TOKEN_KEY));
    return this.post(url, body, options);
  }

  patch(url, body, options: HttpOptions = {}) {
    this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.patch(`${API_URL}/${url}`, body, options).toPromise();
  }

  patchWithToken(url, body, options: HttpOptions = {}) {
    this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(CONST.LOCAL_STORAGE_TOKEN_KEY));
    return this.patch(url, body, options);
  }

  delete(url, params:{[key:string]:any} = null, options: HttpOptions = {}) {
    options.params = params = params
    this._addDefaultHeaderIfNotExists(options, 'Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.delete(`${API_URL}/${url}`, options).toPromise();
  }

  deleteWithToken(url, params:{[key:string]:any} = null, options: HttpOptions = {}) {
    this._addDefaultHeaderIfNotExists(options, 'Authorization', this.localStorage.get(CONST.LOCAL_STORAGE_TOKEN_KEY));
    return this.delete(url, params, options);
  }

  private _addDefaultHeaderIfNotExists(options: HttpOptions, headerName: string, headerValue: string) {
    if (!options.headers) {
      options.headers = {};
    }

    if (!options.headers[headerName]) {
      options.headers[headerName] = headerValue;
    }
  }

}


export interface HttpOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
