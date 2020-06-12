import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitspaceComponent } from './debitspace.component';

describe('DebitspaceComponent', () => {
  let component: DebitspaceComponent;
  let fixture: ComponentFixture<DebitspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
