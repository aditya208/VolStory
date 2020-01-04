import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventDetailPage } from './event-detail.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PopmenuComponent } from './popmenu/popmenu.component';

const routes: Routes = [
  {
    path: '',
    component: EventDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      maxPercent: 100,
      radius: 20,
      space: -3,
      toFixed: 0,
      backgroundPadding: 5,
      outerStrokeWidth: 3,
      outerStrokeColor: '#D8D8D8',
      innerStrokeColor: '#FFFF',
      titleColor: '#FFFF',
      innerStrokeWidth: 3,
      animateTitle: false,
      animation: true,
      animationDuration: 200,
      showUnits: false,
      showSubtitle: false,
      titleFontSize: '10',
      startFromZero: false,
      lazy: false
    })
  ],
  entryComponents: [PopmenuComponent],
  declarations: [EventDetailPage, PopmenuComponent]
})
export class EventDetailPageModule {}
