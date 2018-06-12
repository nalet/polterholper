import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game7AdminComponent } from './game7-admin.component';

describe('Game7AdminComponent', () => {
  let component: Game7AdminComponent;
  let fixture: ComponentFixture<Game7AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game7AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game7AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
