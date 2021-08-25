import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/interfce';
import { changeName, customIncrement } from '../../state/counter.actions';
import { getName } from '../../state/counter.select';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent implements OnInit, OnDestroy {
  public counterValue: number | undefined;
  public name: string | undefined;
  public storeSubscription: Subscription | undefined;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select(getName).subscribe((name) => {
      this.name = name;
    });
  }

  public addCustomNumber(): void {
    if (this.counterValue) {
      this.store.dispatch(customIncrement({ count: this.counterValue }));
    }
  }

  public changeName(): void {
    this.store.dispatch(changeName());
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
