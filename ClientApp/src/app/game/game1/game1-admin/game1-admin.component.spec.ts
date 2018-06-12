import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1AdminComponent } from './game1-admin.component';

describe('Game1AdminComponent', () => {
  let component: Game1AdminComponent;
  let fixture: ComponentFixture<Game1AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game1AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game1AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
