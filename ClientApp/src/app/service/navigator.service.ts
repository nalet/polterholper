import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { SessionType } from './session-type.enum';
import { Step, GameItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  private _last: Step = null;
  private _game: GameItem;

  constructor(private dataService: DataService, private http: HttpClient, private router: Router, private sessionService: SessionService) {
    this.dataService.subject.subscribe(r => {
      this._game = r;
      this.process(this._game);
    });
  }

  public setStep(step: Step) {
    this.http.get("/api/game/step/" + step).subscribe();
  }

  private process(game: GameItem): void {
    if (this.sessionService.sessionType === null) return;
    if (this.sessionService.sessionType === null || this.sessionService.sessionType === SessionType.ADMIN || game === null || game.step === null) return;

    switch (+game.step) {
      case Step.BLANK: this._navigate(Step.BLANK, [this.sessionTypeUrlPrefix() + '/game/blank']); break;
      case Step.INTRO: this._navigate(Step.INTRO, [this.sessionTypeUrlPrefix() + '/game/intro']); break;
      case Step.GAME1: this._navigate(Step.GAME1, [this.sessionTypeUrlPrefix() + '/game/game1']); break;
      case Step.GAME2: this._navigate(Step.GAME2, [this.sessionTypeUrlPrefix() + '/game/game2']); break;
      case Step.GAME3: this._navigate(Step.GAME3, [this.sessionTypeUrlPrefix() + '/game/game3']); break;
      case Step.GAME4: this._navigate(Step.GAME4, [this.sessionTypeUrlPrefix() + '/game/game4']); break;
      case Step.GAME5: this._navigate(Step.GAME5, [this.sessionTypeUrlPrefix() + '/game/game5']); break;
      case Step.GAME6: this._navigate(Step.GAME6, [this.sessionTypeUrlPrefix() + '/game/game6']); break;
      case Step.GAME7: this._navigate(Step.GAME7, [this.sessionTypeUrlPrefix() + '/game/game7']); break;
      case Step.GAME8: this._navigate(Step.GAME8, [this.sessionTypeUrlPrefix() + '/game/game8']); break;
      case Step.SCORE: this._navigate(Step.SCORE, [this.sessionTypeUrlPrefix() + '/game/score']); break;
    }
  }

  private sessionTypeUrlPrefix() {
    switch (this.sessionService.sessionType) {
      case SessionType.ADMIN: return "admin";
      case SessionType.BEAMER: return "beamer";
      case SessionType.MARCO: return "marco";
      case SessionType.TEAM: return "team";
    }
  }

  private _navigate(step: Step, commands: any[]) {
    if (this._last !== step) {
      this.router.navigate(commands);
    }
    this._last = step;
  }

  public navigate() {
    this.process(this._game);
  }
}
