import { Component, OnInit } from '@angular/core';
import { GameItem, Step } from '../../../model/model';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game6-admin',
  templateUrl: './game6-admin.component.html',
  styleUrls: ['./game6-admin.component.scss']
})
export class Game6AdminComponent implements OnInit {

  public game: GameItem;
  public time: Date;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
    this.timer();
  }

  private timer() {
    setTimeout(() => {
      let startTime = Date.parse(this.game.game6.startTime as string);
      let stopTime = Date.parse(this.game.game6.stopTime as string);
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
    this.httpClient.get("/api/game/game6/start").subscribe();
  }

  public stop() {
    this.httpClient.get("/api/game/game6/stop").subscribe();
  }

  ngOnInit() {
  }

  public startGame() {
    this.httpClient.get("/api/game/game6/current/" + (1)).subscribe();
  }
  public plusMarco() {
    this.httpClient.get("/api/game/game6/points/" + (this.game.game6.pointsMarco + 1) + "/" + (this.game.game6.pointsTeam)).subscribe();
  }
  public plusTeam() {
    this.httpClient.get("/api/game/game6/points/" + (this.game.game6.pointsMarco) + "/" + (this.game.game6.pointsTeam + 1)).subscribe();
  }
  public minusMarco() {
    this.httpClient.get("/api/game/game6/points/" + (this.game.game6.pointsMarco - 1) + "/" + (this.game.game6.pointsTeam)).subscribe();
  }
  public minusTeam() {
    this.httpClient.get("/api/game/game6/points/" + (this.game.game6.pointsMarco) + "/" + (this.game.game6.pointsTeam - 1)).subscribe();
  }

  public endGame() {
    if (this.game.game6.pointsMarco === this.game.game6.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 6) + "/" + (this.game.pointsTeam + 6)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if (this.game.game6.pointsMarco > this.game.game6.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 6) + "/" + (this.game.pointsTeam)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if (this.game.game6.pointsMarco < this.game.game6.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 6)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
  }

}
