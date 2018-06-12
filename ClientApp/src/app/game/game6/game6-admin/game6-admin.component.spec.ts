import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game6AdminComponent } from './game6-admin.component';

describe('Game6AdminComponent', () => {
  let component: Game6AdminComponent;
  let fixture: ComponentFixture<Game6AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game6AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game6AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
