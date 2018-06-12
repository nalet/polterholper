import { Component, OnInit, HostListener } from '@angular/core';
import { GameItem } from '../../../model/model';
import { SessionType } from '../../../service/session-type.enum';
import { DataService } from '../../../service/data.service';
import { NavigatorService } from '../../../service/navigator.service';
import { SessionService } from '../../../service/session.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.scss']
})
export class Game3Component implements OnInit {

  public game: GameItem;
  public _SessionType = SessionType;
  public enableStop = false;
  public lastStop: string;
  private audio: HTMLAudioElement = null;
  private allowSet = false;

  constructor(private dataService: DataService, private navigatorService: NavigatorService, public sessionService: SessionService, private httpClient: HttpClient, private messageService: MessageService) {
    this.dataService.subject.subscribe(r => this.game = r);
    this.messageService.messageStream.subscribe(r => {
      if (r !== null && r.message.command === "PLAY" && this.sessionService.sessionType === SessionType.BEAMER) {
        this.play(r.message.params);
      }
      if (r !== null && r.message.command === "STOP" && this.sessionService.sessionType === SessionType.BEAMER) {
        this.stop();
      }
      if (r !== null && r.message.command === "STOP") {
        this.enableStop = false;
        if (this.allowSet && (r.sessionType == SessionType.MARCO || r.sessionType == SessionType.TEAM)) { 
          this.allowSet = false;
          this.lastStop = SessionType[r.sessionType]; 
        }
      }
      if (r !== null && r.message.command === "PLAY") {
        this.enableStop = true;
        this.allowSet = true;
        this.lastStop = "";
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: any) {
    if (event instanceof KeyboardEvent && event.code === "Space" && this.enableStop) {
      this.messageService.sendMessage({ command: "STOP" });
      this.enableStop = false;
    }
  }

  private play(file: string) {
    if(this.audio != null) this.audio.pause();
    this.audio = new Audio("../../assets/musik/" + file);
    this.audio.play();
  }

  private stop() {
    this.audio.pause();

  }

  ngOnInit() {
  }

}
