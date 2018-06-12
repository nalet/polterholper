import { Component, OnInit } from '@angular/core';
import { Step, GameItem } from '../../../model/model';
import { HttpClient } from '@angular/common/http';
import { NavigatorService } from '../../../service/navigator.service';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-game4-admin',
  templateUrl: './game4-admin.component.html',
  styleUrls: ['./game4-admin.component.scss']
})
export class Game4AdminComponent implements OnInit {
  public game: GameItem;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
  }

  ngOnInit() {
  }

  public startGame() {
    this.httpClient.get("/api/game/game4/current/" + (1)).subscribe();
  }
  public plusMarco() {
    this.httpClient.get("/api/game/game4/points/" + (this.game.game4.pointsMarco + 1) + "/" + (this.game.game4.pointsTeam)).subscribe();
  }
  public plusTeam() {
    this.httpClient.get("/api/game/game4/points/" + (this.game.game4.pointsMarco) + "/" + (this.game.game4.pointsTeam + 1)).subscribe();
  }
  public minusMarco() {
    this.httpClient.get("/api/game/game4/points/" + (this.game.game4.pointsMarco - 1) + "/" + (this.game.game4.pointsTeam)).subscribe();
  }
  public minusTeam() {
    this.httpClient.get("/api/game/game4/points/" + (this.game.game4.pointsMarco) + "/" + (this.game.game4.pointsTeam - 1)).subscribe();
  }

  public endGame() {
    if(this.game.game4.pointsMarco === this.game.game4.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 4) + "/" + (this.game.pointsTeam + 4)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game4.pointsMarco < this.game.game4.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 4) + "/" + (this.game.pointsTeam)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game4.pointsMarco > this.game.game4.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 4)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
  }

}
