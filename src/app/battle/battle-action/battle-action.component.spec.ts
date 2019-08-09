import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleActionComponent } from './battle-action.component';

describe('BattleActionComponent', () => {
  let component: BattleActionComponent;
  let fixture: ComponentFixture<BattleActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
