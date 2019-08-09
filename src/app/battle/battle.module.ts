import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleRoutingModule } from './battle-routing.module';
import { BattleBuildComponent } from './battle-build/battle-build.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BattleBuildComponent],
  imports: [
    CommonModule,
    BattleRoutingModule,
    SharedModule
  ]
})
export class BattleModule { }
