import { BigCheckboxComponent } from './../big-checkbox/big-checkbox.component';
import { TeamModule } from './../team/team.module';
import { BetsRoutingModule } from './bets-routing.module';
import { BetsComponent } from './bets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BetsComponent
  ],
  imports: [
    CommonModule,
    BetsRoutingModule,
    TeamModule
  ],
  exports: [BetsComponent]
})
export class BetsModule { }
