import { Component, OnInit } from '@angular/core';
import { GameItem, Step } from '../../../model/model';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game1-admin',
  templateUrl: './game1-admin.component.html',
  styleUrls: ['./game1-admin.component.scss']
})
export class Game1AdminComponent implements OnInit {

  public game: GameItem;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
  }

  ngOnInit() {
  }

  public auswerten(question: number, s: number, m: number, t: number) {
    let result = this.sieger(s, m, t);
    switch (result) {
      case "BOTH": this.httpClient.get("/api/game/game1/points/" + (this.game.game1.pointsMarco + 1) + "/" + (this.game.game1.pointsTeam + 1)).subscribe(); break;
      case "TEAM": this.httpClient.get("/api/game/game1/points/" + (this.game.game1.pointsMarco) + "/" + (this.game.game1.pointsTeam + 1)).subscribe(); break;
      case "MARCO": this.httpClient.get("/api/game/game1/points/" + (this.game.game1.pointsMarco + 1) + "/" + (this.game.game1.pointsTeam)).subscribe(); break;
    }
  }

  public sieger(s: number, m: number, t: number): string {
    let dm = Math.abs(s - m);
    let dt = Math.abs(s - t);
    if (dm === dt) {
      return "BOTH";
    }
    if (dm > dt) {
      return "TEAM";
    } else {
      return "MARCO";
    }
  }

  public endGame() {
    if(this.game.game1.pointsMarco === this.game.game1.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 1) + "/" + (this.game.pointsTeam + 1)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game1.pointsMarco > this.game.game1.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 1) + "/" + (this.game.pointsTeam)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if(this.game.game1.pointsMarco < this.game.game1.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 1)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
  }

  public startGame() {
    this.next();
  }

  public next() {
    if (this.game.game1.current !== 14) {
      this.httpClient.get("/api/game/game1/current/" + (this.game.game1.current + 1)).subscribe();
    } else {
      this.httpClient.get("/api/game/game1/current/" + (this.game.game1.current)).subscribe();
    }
  }
}
