import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { CatchthorwComponent } from './catchthorw/catchthorw.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
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
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { RetryComponent } from './retry/retry.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ZipComponent } from './zip/zip.component';

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
        path:'subject',
        component:SubjectComponent
      },
      {
        path:'replaysubject',
        component:ReplaySubjectComponent
      },
      {
        path:'async',
        component:AsyncSubjectComponent
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
      {
        path:'concatmap',
        component:ConcatMapComponent
      },
      {
        path:'switchmap',
        component:SwitchMapComponent
      },
      {
        path:'exhaustmap',
        component:ExhaustMapComponent
      },
      {
        path:'sharereplay',
        component:ShareReplayComponent
      },
      {
        path:'combine',
        component:CombineLatestComponent
      },
      {
        path:'zip',
        component:ZipComponent
      },
      {
        path:'catcherror',
        component:CatchthorwComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableRoutingModule {}
