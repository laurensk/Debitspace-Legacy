import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobBarComponent } from './tob-bar.component';

describe('TobBarComponent', () => {
  let component: TobBarComponent;
  let fixture: ComponentFixture<TobBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
