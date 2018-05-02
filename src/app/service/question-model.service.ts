import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {Observable} from "rxjs/Observable";
import {DemoQuestion, Domain, QuestionBase, Questionnare, Subdomain} from "../model/questionBase";
import {API_URL} from "./http.service";
import {catchError} from "rxjs/operators";
import {ObjectUnsubscribedError} from "rxjs/Rx";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }
  )
}

@Injectable()
export class QuestionModelService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('QuestionsService');
  }

  /**GET: get all the demographic questions from the server*/
  getDemoQsuestions(): Observable<DemoQuestion[]> {
    return this.http.get<DemoQuestion[]>(API_URL+'/demographic')
      .pipe (
        catchError(this.handleError('getQuestions', []))
      );
  }

  getQuestionnaire(): Observable<Questionnare[]> {
    return this.http.get<Questionnare[]>(API_URL + '/questionnaire')
      .pipe (
        catchError(this.handleError('getQuestionnaire', []))
      );
  }

  /** GET domain and subdomain*/
  getDomain(): Observable<Domain[]> {
    return this.http.get<Domain[]>(API_URL + '/domain')
      .pipe(
        catchError(this.handleError('getDomains', []))
      );
  }

  getSubdomainByDomain(domId: number): Observable<Subdomain[]> {
    return this.http.get<Subdomain[]>(API_URL + '/subDomain/' + domId)
      .pipe(
        catchError(this.handleError('getDomainBySubdomain', []))
      );
  }

  getQuestionBySubdomain(subdomId: number): Observable<Questionnare[]> {
    return this.http.get<Questionnare[]>(API_URL + '/questionnaire/subDomain/' + subdomId)
      .pipe(
        catchError(this.handleError('getQuestionBySubdomain', []))
      );
  }

  getQuesByDomain(domain: string): Observable<Questionnare[]> {
    return this.http.get<Questionnare[]>(API_URL + '/questionnaire/${domain}')
      .pipe(
        catchError(this.handleError('getQuesByDomain', []))
      );
  }

  /** GET; get single questions by id*/
  getDemoQuesById(userid: number): Observable<{}> {
    return this.http.get<any>(API_URL + '/demographic/${userid}')
      .pipe(
        catchError(this.handleError('getDemoQueById', []))
    );
  }

  getQuesByUser(userid: number): Observable<{}> {
    return this.http.get<any>(API_URL + '/questionnaire/${userid}').
      pipe(
        catchError(this.handleError('getQuesByUserId', []))
    );
  }

  /** POST: add a new demographic question to the database*/
  addDemoQues(ques: DemoQuestion): Observable<DemoQuestion> {
    return this.http.post<DemoQuestion>(API_URL + '/demographic', ques, httpOptions)
      .pipe(
        catchError(this.handleError('addQuestion', ques))
      );
  }

  addQuestionnaire(ques: Questionnare): Observable<Questionnare> {
    return this.http.post<Questionnare>(API_URL + '/questionnaire', ques, httpOptions)
      .pipe(
        catchError(this.handleError('addQuestionnaire', ques))
      );
  }

  addDomain(domain: Domain): Observable<any> {
    return this.http.post<any>(API_URL + '/domain', domain, httpOptions)
      .pipe(
        catchError(this.handleError('addDomain', domain))
      );
  }

  /**PATCH: add a new subdomain to the list */
  addSubdomain(domId: number, subdomain: Subdomain): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'token');
    return this.http.patch<any>(API_URL + '/subDomain/' + domId, subdomain, httpOptions)
      .pipe (
        catchError(this.handleError('addSubdomain', []))
      );
  }


  /**PUT: update question des or ans on the server*/
  updateQues(id: number): Observable<{}> {
    httpOptions.headers = httpOptions.headers.set(
      'Authorization', 'my-new-auth-token'
    );

    return this.http.put<any>(API_URL + '/demographic/${id}', id, httpOptions)
      .pipe(
        catchError(this.handleError('updateQuestions', id))
      );
  }

}
