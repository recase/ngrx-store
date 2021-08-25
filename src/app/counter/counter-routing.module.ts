import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterMainComponent } from './components/counter-main/counter-main.component';
import { CounterComponent } from './counter.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: '',
        component: CounterMainComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterRoutingModule {}
