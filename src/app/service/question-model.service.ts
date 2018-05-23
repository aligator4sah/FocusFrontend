import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {Observable} from "rxjs/Observable";
import {DemoQuestion, Domain, QuestionBase, Questionnare, Session, Subdomain} from "../model/questionBase";
import {API_URL} from "./http.service";
import {catchError} from "rxjs/operators";
import {ObjectUnsubscribedError} from "rxjs/Rx";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }
  )
};

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

  getQuesByDomain(domId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/questionnaire/domain/' + domId)
      .pipe(
        catchError(this.handleError('getQuesByDomain', []))
      );
  }


  /**GET: all sessions by user id **/
  getSessionByUserId(userId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/session/user/' + userId)
      .pipe(
        catchError(this.handleError('getSessionByUserId', []))
      );
  }

  /** GET: get all answers by session and filter by domain**/
  getAnsBySession(sessionId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/session/QA/' + sessionId)
      .pipe(
        catchError(this.handleError('getAnswerBySession', []))
      )
  }


  /** GET: calculate domain min and max score**/
  getDomainScore(id: number): Observable<any> {
    return this.http.get<any>(API_URL + '/questionnaire/calculate/' + id)
      .pipe(
        catchError(this.handleError('calculateDomainScore'))
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

  getScore(sessionId: number): Observable<any> {
    return this.http.get<any>(API_URL + '/session/score/' + sessionId)
      .pipe(
        catchError(this.handleError('getScore', []))
      );
  }

  /**POST: get answers by session and domain **/
  getAnswerBySessionDomain(body: any): Observable<any> {
    return this.http.post(API_URL + '/answer', body, httpOptions)
      .pipe(
        catchError(this.handleError('getAnswerBySessionAndDomain'))
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

  /** POST: add user demographic answer to the database**/
  addUserDemo(answers: any[]): Observable<any> {
    return this.http.post<any>(API_URL + '/userDemographic', answers, httpOptions)
      .pipe(
        catchError(this.handleError('addUserDemographic', answers))
      );
  }

  addUserAnswer(session: Session, sessionId: number): Observable<any> {
    return this.http.patch<any>(API_URL + '/session/addSession/' + sessionId, session, httpOptions)
      .pipe(
        catchError(this.handleError('addUserAnswer', session))
      );
  }

  addSession(session: Session): Observable<any> {
    return this.http.post<any>(API_URL + '/session', session, httpOptions)
      .pipe(
        catchError(this.handleError('createSession', session))
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

  deleteSubdomainById(subdomId: number): Observable<any> {
    return this.http.delete<any>(API_URL+ '/subDomain/isolate/' + subdomId)
      .pipe(
        catchError(this.handleError('deleteSubdomainById'))
      );
  }


  deleteSessionById(sessionId: number): Observable<any> {
    return this.http.delete(API_URL + '/session/' + sessionId, httpOptions)
      .pipe(
        catchError(this.handleError<any>('deleteHero'))
      );
  }

}
