import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleRoutingModule } from './battle-routing.module';
import { BattleBuildComponent } from './battle-build/battle-build.component';
import { SharedModule } from '../shared/shared.module';
import { BattleRecapComponent } from './battle-recap/battle-recap.component';
import { BattleHomeComponent } from './battle-home/battle-home.component';
import { BattleActionComponent } from './battle-action/battle-action.component';


@NgModule({
  declarations: [BattleBuildComponent, BattleRecapComponent, BattleHomeComponent, BattleActionComponent],
  imports: [
    CommonModule,
    BattleRoutingModule,
    SharedModule
  ]
})
export class BattleModule { }
