import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'battle',
    loadChildren: () => import('./battle/battle.module').then(m => m.BattleModule)
  },
  {
    path: '**',
    redirectTo: '/battle/build'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
