import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game8AdminComponent } from './game8-admin.component';

describe('Game8AdminComponent', () => {
  let component: Game8AdminComponent;
  let fixture: ComponentFixture<Game8AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game8AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game8AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
