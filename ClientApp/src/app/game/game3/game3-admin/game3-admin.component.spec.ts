import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game3AdminComponent } from './game3-admin.component';

describe('Game3AdminComponent', () => {
  let component: Game3AdminComponent;
  let fixture: ComponentFixture<Game3AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game3AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game3AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
