import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { BigCheckboxComponent } from '../big-checkbox/big-checkbox.component';

@NgModule({
  declarations: [TeamComponent, BigCheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamComponent]
})
export class TeamModule { }
