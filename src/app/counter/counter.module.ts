import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CounterMainComponent } from './components/counter-main/counter-main.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { COUNTER_STATE_NAME } from './state/counter.select';

@NgModule({
  declarations: [
    CounterComponent,
    CounterMainComponent,
    CounterOutputComponent,
    CounterInputComponent,
    CustomCounterComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ],
})
export class CounterModule {}
