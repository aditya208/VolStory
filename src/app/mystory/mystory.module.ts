import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MystoryPage } from './mystory.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: MystoryPage
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
      outerStrokeColor: '#C6F8F5',
      innerStrokeColor: '#03756D',
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
  declarations: [MystoryPage]
})
export class MystoryPageModule {}
