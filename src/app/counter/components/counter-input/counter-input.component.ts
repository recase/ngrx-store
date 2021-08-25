import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfce';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../../state/counter.actions';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public incrementCounter(): void {
    this.store.dispatch(incrementAction());
  }
  public decremetCounter(): void {
    this.store.dispatch(decrementAction());
  }
  public resetCounter(): void {
    this.store.dispatch(resetAction());
  }
}
