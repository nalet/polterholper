import { Component, OnInit } from '@angular/core';
import { GameItem, Step } from '../../../model/model';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game8-admin',
  templateUrl: './game8-admin.component.html',
  styleUrls: ['./game8-admin.component.scss']
})
export class Game8AdminComponent implements OnInit {

  public game: GameItem;
  public time: Date;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
    this.timer();
  }

  private timer() {
    setTimeout(() => {
      let startTime = Date.parse(this.game.game8.startTime as string);
      let stopTime = Date.parse(this.game.game8.stopTime as string);
      let nowTime = Date.now();
      if(startTime > 0 && stopTime > 0 && stopTime > startTime) {
        this.time = new Date(stopTime - startTime);
      }else{
        this.time = new Date(nowTime - startTime);
      }
      if(startTime == stopTime) {
        this.time = new Date(stopTime - startTime);
      }
      this.timer();
    }, 100);
  }

  public start() {
    this.httpClient.get("/api/game/game8/start").subscribe();
  }

  public stop() {
    this.httpClient.get("/api/game/game8/stop").subscribe();
  }

  ngOnInit() {
  }

  public startGame() {
    this.httpClient.get("/api/game/game8/current/" + (1)).subscribe();
  }
  public plusMarco() {
    this.httpClient.get("/api/game/game8/points/" + (this.game.game8.pointsMarco + 1) + "/" + (this.game.game8.pointsTeam)).subscribe();
  }
  public plusTeam() {
    this.httpClient.get("/api/game/game8/points/" + (this.game.game8.pointsMarco) + "/" + (this.game.game8.pointsTeam + 1)).subscribe();
  }
  public minusMarco() {
    this.httpClient.get("/api/game/game8/points/" + (this.game.game8.pointsMarco - 1) + "/" + (this.game.game8.pointsTeam)).subscribe();
  }
  public minusTeam() {
    this.httpClient.get("/api/game/game8/points/" + (this.game.game8.pointsMarco) + "/" + (this.game.game8.pointsTeam - 1)).subscribe();
  }

  public endGame() {
    if(this.game.game8.pointsMarco === this.game.game8.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 8) + "/" + (this.game.pointsTeam + 8)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game8.pointsMarco > this.game.game8.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 8) + "/" + (this.game.pointsTeam)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game8.pointsMarco < this.game.game8.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 8)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
  }

}
