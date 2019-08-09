import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleBuildComponent } from './battle-build.component';

describe('BattleBuildComponent', () => {
  let component: BattleBuildComponent;
  let fixture: ComponentFixture<BattleBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
