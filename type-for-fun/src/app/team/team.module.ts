import { PitchComponent } from './../pitch/pitch.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { BigCheckboxComponent } from '../big-checkbox/big-checkbox.component';

@NgModule({
  declarations: [TeamComponent, BigCheckboxComponent, PitchComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamComponent]
})
export class TeamModule { }
