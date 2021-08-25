import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/interfce';
import { getCounter } from '../../state/counter.select';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  public counter: number = 0;
  private counterSubscribtion: Subscription | undefined;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counterSubscribtion = this.store
      .select(getCounter)
      .subscribe((counter) => {
        this.counter = counter;
      });
  }

  ngOnDestroy() {
    if (this.counterSubscribtion) {
      this.counterSubscribtion.unsubscribe();
    }
  }
}
