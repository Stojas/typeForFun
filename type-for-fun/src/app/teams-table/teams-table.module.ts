import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsTableComponent } from './teams-table.component';
import { TeamsTableRoutingModule } from './teams-table-routing.module';

@NgModule({
  declarations: [
    TeamsTableComponent
  ],
  imports: [
    CommonModule,
    TeamsTableRoutingModule
  ],
  exports: [
    TeamsTableComponent
  ]
})
export class TeamsTableModule { }
