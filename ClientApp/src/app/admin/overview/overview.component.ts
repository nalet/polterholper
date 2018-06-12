import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { NavigatorService } from '../../service/navigator.service';
import { Step, GameItem } from '../../model/model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public game: GameItem;
  public _Step = Step;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
  }

  ngOnInit() {
  }

  public startShow() {
    this.navigatorService.setStep(Step.INTRO);
  }

  public startGame1() {
    this.navigatorService.setStep(Step.GAME1);
  }

  public startGame2() {
    this.navigatorService.setStep(Step.GAME2);
  }

  public startGame3() {
    this.navigatorService.setStep(Step.GAME3);
  }

  public startGame4() {
    this.navigatorService.setStep(Step.GAME4);
  }

  public startGame5() {
    this.navigatorService.setStep(Step.GAME5);
  }

  public startGame6() {
    this.navigatorService.setStep(Step.GAME6);
  }

  public startGame7() {
    this.navigatorService.setStep(Step.GAME7);
  }

  public startGame8() {
    this.navigatorService.setStep(Step.GAME8);
  }

  public refresh() {
    this.httpClient.get("api/game/refresh").subscribe();
  }

  public plusM() {
    this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 1) + "/" + (this.game.pointsTeam)).subscribe();
  }

  public minusM() {
    this.httpClient.get("/api/game/points/" + (this.game.pointsMarco - 1) + "/" + (this.game.pointsTeam)).subscribe();
  }

  public plusT() {
    this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 1)).subscribe();
  }

  public minusT() {
    this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam - 1)).subscribe();
  }

}
