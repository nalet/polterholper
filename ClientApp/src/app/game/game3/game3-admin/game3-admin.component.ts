import { Component, OnInit } from '@angular/core';
import { GameItem, Step } from '../../../model/model';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../service/message.service';
import { SessionType } from '../../../service/session-type.enum';

@Component({
  selector: 'app-game3-admin',
  templateUrl: './game3-admin.component.html',
  styleUrls: ['./game3-admin.component.scss']
})
export class Game3AdminComponent implements OnInit {

  public game: GameItem;
  public lastStop: string;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, private httpClient: HttpClient, private messageService: MessageService) {
    this.dataService.subject.subscribe(r => this.game = r);
    this.messageService.messageStream.subscribe(r => {
      if (r !== null && (r.sessionType == SessionType.MARCO || r.sessionType == SessionType.TEAM)) {
        this.lastStop = SessionType[r.sessionType];
      }
    });
  }

  ngOnInit() {
  }

  public startGame() {
    this.httpClient.get("/api/game/game3/current/" + (1)).subscribe();
  }
  public plusMarco() {
    this.httpClient.get("/api/game/game3/points/" + (this.game.game3.pointsMarco + 1) + "/" + (this.game.game3.pointsTeam)).subscribe();
  }
  public plusTeam() {
    this.httpClient.get("/api/game/game3/points/" + (this.game.game3.pointsMarco) + "/" + (this.game.game3.pointsTeam + 1)).subscribe();
  }
  public minusMarco() {
    this.httpClient.get("/api/game/game3/points/" + (this.game.game3.pointsMarco - 1) + "/" + (this.game.game3.pointsTeam)).subscribe();
  }
  public minusTeam() {
    this.httpClient.get("/api/game/game3/points/" + (this.game.game3.pointsMarco) + "/" + (this.game.game3.pointsTeam - 1)).subscribe();
  }

  public play(song: string) {
    this.messageService.sendMessage({ command: "PLAY", params: song });
  }

  public stop() {
    this.messageService.sendMessage({ command: "STOP" });
  }


  public endGame() {
    if (this.game.game3.pointsMarco === this.game.game3.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 3) + "/" + (this.game.pointsTeam + 3)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if (this.game.game3.pointsMarco > this.game.game3.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco + 3) + "/" + (this.game.pointsTeam)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
    if (this.game.game3.pointsMarco < this.game.game3.pointsTeam) {
      this.httpClient.get("/api/game/points/" + (this.game.pointsMarco) + "/" + (this.game.pointsTeam + 3)).subscribe(() => this.navigatorService.setStep(Step.SCORE));
    }
  }

}
