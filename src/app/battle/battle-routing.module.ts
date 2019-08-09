import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleBuildComponent } from './battle-build/battle-build.component';


const routes: Routes = [
  {
    path: 'build',
    component: BattleBuildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattleRoutingModule { }
