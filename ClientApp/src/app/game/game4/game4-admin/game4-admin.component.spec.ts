import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game4AdminComponent } from './game4-admin.component';

describe('Game4AdminComponent', () => {
  let component: Game4AdminComponent;
  let fixture: ComponentFixture<Game4AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game4AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game4AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
