import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data = new BehaviorSubject<GameItem>(null);

  constructor(private messageService: MessageService, private http: HttpClient) {
    this.http.get<GameItem>("/api/game").subscribe(r => {
       this._data.next(r);
       this.startSubscribing();
      });
  }

  private startSubscribing() {
    this.messageService.connection.on("DATA", r => this._data.next(r));
  }

  public get subject() {
    return this._data;
  }


}
