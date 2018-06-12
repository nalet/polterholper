import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2AdminComponent } from './game2-admin.component';

describe('Game2AdminComponent', () => {
  let component: Game2AdminComponent;
  let fixture: ComponentFixture<Game2AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
