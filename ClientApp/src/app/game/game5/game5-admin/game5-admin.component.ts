import { Component, OnInit } from '@angular/core';
import { Step, GameItem } from '../../../model/model';
import { HttpClient } from '@angular/common/http';
import { NavigatorService } from '../../../service/navigator.service';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-game5-admin',
  templateUrl: './game5-admin.component.html',
  styleUrls: ['./game5-admin.component.scss']
})
export class Game5AdminComponent implements OnInit {
  public game: GameItem;
  public countdown: number;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
    this.timer();
  }

  private timer() {
    setTimeout(() => {
      let lastTime = Date.parse(this.game.game5.lastTime as string);
      let diff = Math.floor((Date.now() - lastTime)/1000);
      let countdown = 45 - diff;
      this.countdown = countdown > 0 ? countdown : 0;
      this.timer();
    }, 100);
  }

  ngOnInit() {
  }

  public start() {
    this.httpClient.get("/api/game/game5/start").subscribe();
  }

  public showAll() {
    this.httpClient.get("/api/game/game5/show/all/step").subscribe();
  }

  public mistakeMarco() {
    this.plusTeam();
  }

  public mistakeTeam() {
    this.plusMarco();
  }

  public next() {
    this.httpClient.get("/api/game/game5/current/" + (this.game.game5.current + 1)).subscribe();
  }

  public startGame() {
    this.httpClient.get("/api/game/game5/current/" + (1)).subscribe();
  }
  public plusMarco() {
    this.httpClient.get("/api/game/game5/points/" + (this.game.game5.pointsMarco + 1) + "/" + (this.game.game5.pointsTeam)).subscribe();
  }
  public plusTeam() {
    this.httpClient.get("/api/game/game5/points/" + (this.game.game5.pointsMarco) + "/" + (this.game.game5.pointsTeam + 1)).subscribe();
  }
  public minusMarco() {
    this.httpClient.get("/api/game/game5/points/" + (this.game.game5.pointsMarco - 1) + "/" + (this.game.game5.pointsTeam)).subscribe();
  }
  public minusTeam() {
    this.httpClient.get("/api/game/game5/points/" + (this.game.game5.pointsMarco) + "/" + (this.game.game5.pointsTeam - 1)).subscribe();
  }

  public showItem(id: number) {
    this.httpClient.get("/api/game/game5/show/" + (id)).subscribe();
  }

  public endGame() {
    if(this.game.game5.pointsMarco === this.game.game5.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 5) + "/" + (this.game.pointsTeam + 5)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game5.pointsMarco > this.game.game5.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 5) + "/" + (this.game.pointsTeam)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game5.pointsMarco < this.game.game5.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 5)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
  }

}
