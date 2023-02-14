import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatComponent } from './concat/concat.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeComponent } from './merge/merge.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { RetryComponent } from './retry/retry.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'fromevent',
        component: FromEventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'offrom',
        component: OfFromComponent,
      },
      {
        path:'toarray',
        component:ToArrayComponent
      },
      {
        path:'customeobservable',
        component:CustomobservableComponent
      },
      {
        path:'map',
        component:MapComponent
      },
      {
        path:'pluck',
        component:PluckComponent
      },
      {
        path:'filter',
        component:FilterComponent
      },
      {
        path:'tap',
        component:TapComponent
      },
      {
        path:'take',
        component:TakeComponent
      },
      {
        path:'retry',
        component:RetryComponent
      },
      {
        path:'debounce',
        component:DebounceTimeComponent
      },
      {
        path:'concat',
        component:ConcatComponent
      },
      {
        path:'merge',
        component:MergeComponent
      },
      {
        path:'mergemap',
        component:MergeMapComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableRoutingModule {}
