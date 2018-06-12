import { Injectable } from '@angular/core';
import { SessionType } from './session-type.enum';
import { NavigatorService } from './navigator.service';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _sessionType: SessionType = null;

  constructor(private router: Router) { 
    router.events.subscribe(r => {
      if(!(r instanceof ActivationEnd)) return;
        switch (r.snapshot.params['sessionType']) {
          case 'admin': {
            this.setSession(SessionType.ADMIN);
            break;
          }
          case 'marco': {
            this.setSession(SessionType.MARCO);
            break;
          }
          case 'team': {
            this.setSession(SessionType.TEAM);
            break;
          }
          case 'beamer': {
            this.setSession(SessionType.BEAMER);
            break;
          }
        }
    });
  }

  public setSession(sessionType: SessionType) {
    this._sessionType = sessionType;
  }

  public get sessionType() {
    return this._sessionType;
  }
}
