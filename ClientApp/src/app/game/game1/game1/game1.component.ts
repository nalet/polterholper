import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../../model/model';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../../service/session.service';
import { SessionType } from '../../../service/session-type.enum';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit {

  public game: GameItem;
  public _SessionType = SessionType;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, public sessionService: SessionService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
  }

  ngOnInit() {
  }

  onChange(q: number, input: string) {
    if(input === "") return;
    this.httpClient.get("/api/game/game1/" + SessionType[this.sessionService.sessionType] + "/" + q + "/" + input).subscribe();
  }

}
