import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleRecapComponent } from './battle-recap.component';

describe('BattleRecapComponent', () => {
  let component: BattleRecapComponent;
  let fixture: ComponentFixture<BattleRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
