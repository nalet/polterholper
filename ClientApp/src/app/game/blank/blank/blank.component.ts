import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../../service/session.service';
import { SessionType } from '../../../service/session-type.enum';
import { NavigatorService } from '../../../service/navigator.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }

}
