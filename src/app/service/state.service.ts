import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class StateService {

  existMember$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  subProfileRole$: BehaviorSubject<String> = new BehaviorSubject<String>("");
  profileRole$: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor() {

  }

}
