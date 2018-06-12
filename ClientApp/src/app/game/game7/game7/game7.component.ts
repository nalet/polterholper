import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../../model/model';
import { SessionType } from '../../../service/session-type.enum';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { SessionService } from '../../../service/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game7',
  templateUrl: './game7.component.html',
  styleUrls: ['./game7.component.scss']
})
export class Game7Component implements OnInit {

  public game: GameItem;
  public _SessionType = SessionType;
  public time: Date;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, public sessionService: SessionService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
    this.timer();
  }

  private timer() {
    setTimeout(() => {
      let startTime = Date.parse(this.game.game7.startTime as string);
      let stopTime = Date.parse(this.game.game7.stopTime as string);
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

  ngOnInit() {
  }

}
