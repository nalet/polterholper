import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';
import { SessionService } from './session.service';
import { SessionType } from './session-type.enum';
import { Message } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  protected _connection: HubConnection;
  private _messageStream = new BehaviorSubject<{ sessionType: SessionType, message: Message }>(null);


  constructor(private sessionService: SessionService) {
    this._connection = new HubConnectionBuilder()
      .withUrl("/messages")
      .build();

    this._connection.start().catch(err => console.error(err.toString()));
    this.connection.on("ReceiveMessage", (s, m) => this._messageStream.next({ sessionType: s, message: m }));
  }

  public get connection(): HubConnection {
    return this._connection;
  }


  public get messageStream() {
    return this._messageStream;
  }

  public sendMessage(message: Message) {
    this._connection.send("SendMessage", this.sessionService.sessionType, message).catch(err => console.error(err));
  }
}
