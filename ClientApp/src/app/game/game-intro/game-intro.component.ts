import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-game-intro',
  templateUrl: './game-intro.component.html',
  styleUrls: ['./game-intro.component.scss'],
  animations: [
    trigger('state', [
      state('init', style({ transform: 'scale(0)' })),
      state('prestand', style({ transform: 'scale(1.5)' })),
      state('stand', style({ transform: 'scale(1.0)' })),
      state('rotate1', style({ transform: 'rotateY(-90deg)' })),
      state('rotate2', style({ transform: 'rotateY(0deg)' })),
      state('rotate3', style({ transform: 'rotateY(-90deg)' })),
      state('rotate4', style({ transform: 'rotateY(0deg)' })),
      state('rotate5', style({ transform: 'rotateY(-90deg)' })),
      state('rotate6', style({ transform: 'rotateY(0deg)' })),
      state('rotate7', style({ transform: 'rotateY(-90deg)' })),
      state('rotate8', style({ transform: 'rotateY(0deg)' })),
      transition('* => init', animate('0s')),
      transition('prestand => stand', animate('.2s ease-in')),
      transition('stand => rotate1', animate('2s ease-in')),
      transition('rotate1 => rotate2', animate('.5s ease-in')),
      transition('rotate2 => rotate3', animate('.5s ease-in')),
      transition('rotate3 => rotate4', animate('2s ease-in')),
      transition('rotate4 => rotate5', animate('2s ease-in')),
      transition('rotate5 => rotate6', animate('.5s ease-in')),
      transition('rotate6 => rotate7', animate('.5s ease-in')),
      transition('rotate7 => rotate8', animate('2s ease-in')),
      transition('rotate8 => rotate1', animate('2s ease-in')),
      transition('* => *', animate('.5s ease-in')),
    ]),
    trigger('state', [
      state('init', style({ opacity: 0 })),
      state('prestand', style({ opacity: 1 })),
      transition('* => init', animate('0s')),
      transition('prestand => stand', animate('.2s ease-in')),
      transition('* => *', animate('.5s ease-in')),
    ])
  ]
})
export class GameIntroComponent implements OnInit {

  @Input()
  public game: string;
  @Input()
  public title: string;

  public content: string = '';
  public state: string = 'init';
  private audio = new Audio("../../assets/signet.mp3");

  constructor() { }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  public transitionDone(event: any): void {
    switch (this.state) {
      case 'init': this.state = 'prestand'; break;
      case 'prestand': this.state = 'stand'; break;
      case 'stand': this.state = 'rotate1'; this.content = this.game; break;
      case 'rotate1': this.state = 'rotate2'; this.content = ""; break;
      case 'rotate2': this.state = 'rotate3'; this.content = ""; break;
      case 'rotate3': this.state = 'rotate4'; this.content = this.title; break;
      case 'rotate4': this.state = 'rotate5'; this.content = this.title; break;
      case 'rotate5': this.state = 'rotate6'; this.content = ""; break;
      case 'rotate6': this.state = 'rotate7'; this.content = ""; break;
      case 'rotate7': this.state = 'rotate8'; this.content = this.game; break;
      case 'rotate8': this.state = 'rotate1'; this.content = this.game; break;
    }
  }

  ngOnInit() {
    this.content = this.game;
    this.audio.play();
  }

}
