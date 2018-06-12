import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../../model/model';
import { SessionType } from '../../../service/session-type.enum';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { SessionService } from '../../../service/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss']
})
export class Game2Component implements OnInit {

  public game: GameItem;
  public _SessionType = SessionType;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, public sessionService: SessionService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
  }

  ngOnInit() {
  }

}
