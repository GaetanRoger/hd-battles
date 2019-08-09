import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleBuildComponent } from './battle-build/battle-build.component';
import { BattleRecapComponent } from './battle-recap/battle-recap.component';
import { BattleHomeComponent } from './battle-home/battle-home.component';
import { BattleActionComponent } from './battle-action/battle-action.component';

const routes: Routes = [
  {
    path: 'build',
    component: BattleBuildComponent
  },
  {
    path: 'recap/:id',
    component: BattleRecapComponent
  },
  {
    path: 'action/:id',
    component: BattleActionComponent
  },
  {
    path: '',
    component: BattleHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattleRoutingModule {}
