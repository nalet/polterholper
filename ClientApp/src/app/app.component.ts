import { Component } from '@angular/core';
import { NavigatorService } from './service/navigator.service';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private navigatorService: NavigatorService, private messageService: MessageService) {}
}
