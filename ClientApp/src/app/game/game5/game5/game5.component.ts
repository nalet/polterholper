import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../../model/model';
import { SessionType } from '../../../service/session-type.enum';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { SessionService } from '../../../service/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game5',
  templateUrl: './game5.component.html',
  styleUrls: ['./game5.component.scss']
})
export class Game5Component implements OnInit {

  public game: GameItem;
  public _SessionType = SessionType;
  public countdown: number;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, public sessionService: SessionService, private httpClient: HttpClient) {
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

}
