import { Component, OnInit } from '@angular/core';
import { GameItem, Step } from '../../../model/model';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game2-admin',
  templateUrl: './game2-admin.component.html',
  styleUrls: ['./game2-admin.component.scss']
})
export class Game2AdminComponent implements OnInit {

  public game: GameItem;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
  }

  ngOnInit() {
  }

  public startGame() {
    this.httpClient.get("/api/game/game2/current/" + (1)).subscribe();
  }
  public plusMarco() {
    this.httpClient.get("/api/game/game2/points/" + (this.game.game2.pointsMarco + 1) + "/" + (this.game.game2.pointsTeam)).subscribe();
  }
  public plusTeam() {
    this.httpClient.get("/api/game/game2/points/" + (this.game.game2.pointsMarco) + "/" + (this.game.game2.pointsTeam + 1)).subscribe();
  }
  public minusMarco() {
    this.httpClient.get("/api/game/game2/points/" + (this.game.game2.pointsMarco - 1) + "/" + (this.game.game2.pointsTeam)).subscribe();
  }
  public minusTeam() {
    this.httpClient.get("/api/game/game2/points/" + (this.game.game2.pointsMarco) + "/" + (this.game.game2.pointsTeam - 1)).subscribe();
  }
  public plusCount() {
    this.httpClient.get("/api/game/game2/count/" + (this.game.game2.count + 1)).subscribe();
  }
  public minusCount() {
    this.httpClient.get("/api/game/game2/count/" + (this.game.game2.count - 1)).subscribe();
  }
  public countZero() {
    this.httpClient.get("/api/game/game2/count/" + (0)).subscribe();
  }

  public endGame() {
    if(this.game.game2.pointsMarco === this.game.game2.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 2) + "/" + (this.game.pointsTeam + 2)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game2.pointsMarco > this.game.game2.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 2) + "/" + (this.game.pointsTeam)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game2.pointsMarco < this.game.game2.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 2)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
  }

}
