import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InitialPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [InitialPageComponent]
})
export class InitialPageModule { }
