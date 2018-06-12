import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public reset() {
    this.httpClient.get("/api/game/reset").subscribe();
  }

}
