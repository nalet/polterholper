import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../model/model';
import { SessionType } from '../../service/session-type.enum';
import { DataService } from '../../service/data.service';
import { NavigatorService } from '../../service/navigator.service';
import { SessionService } from '../../service/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  public game: GameItem;
  public _SessionType = SessionType;
  private audio = new Audio("../../assets/signet.mp3");

  constructor(private dataService: DataService, private navigatorService: NavigatorService, public sessionService: SessionService, private httpClient: HttpClient) {
    this.dataService.subject.subscribe(r => this.game = r);
  }

  ngOnInit() {
    this.audio.play();
  }

}
