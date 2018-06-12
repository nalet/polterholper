import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../../model/model';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { SessionService } from '../../../service/session.service';
import { HttpClient } from '@angular/common/http';
import { SessionType } from '../../../service/session-type.enum';

@Component({
  selector: 'app-game8',
  templateUrl: './game8.component.html',
  styleUrls: ['./game8.component.scss']
})
export class Game8Component implements OnInit {

  public game: GameItem;
  public _SessionType = SessionType;
  public time: Date;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, public sessionService: SessionService, private httpClient: HttpClient) {
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

  ngOnInit() {
  }

}
