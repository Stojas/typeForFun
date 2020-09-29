import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-big-checkbox',
  templateUrl: './big-checkbox.component.html',
  styleUrls: ['./big-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigCheckboxComponent implements OnInit {

  @Input() placeholder1 = '';
  @Input() placeholder2= '';

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  value: boolean = true;

  init = null;

  constructor() { }

  ngOnInit() {
  }

  changeState(){
    this.init = true;
    this.value = !this.value;
    this.change.emit(this.value);
  }

}
