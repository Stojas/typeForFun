import { InitialPageComponent } from './initial-page/initial-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: InitialPageComponent  },
  {
    path: 'bets',
    loadChildren: () => import('./bets/bets.module').then(m => m.BetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
