import { TeamsTableModule } from './teams-table/teams-table.module';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: InitialPageComponent  },
  {
    path: 'bets',
    loadChildren: () => import('./bets/bets.module').then(m => m.BetsModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams-table/teams-table.module').then(m => m.TeamsTableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
