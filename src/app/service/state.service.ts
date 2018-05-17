import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class StateService {
  existMember$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor() {

  }

}
