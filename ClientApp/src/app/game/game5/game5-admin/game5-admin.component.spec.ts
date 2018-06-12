import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game5AdminComponent } from './game5-admin.component';

describe('Game5AdminComponent', () => {
  let component: Game5AdminComponent;
  let fixture: ComponentFixture<Game5AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game5AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game5AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
