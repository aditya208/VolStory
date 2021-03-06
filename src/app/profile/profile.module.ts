import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
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
      radius: 23,
      space: -4,
      toFixed: 0,
      backgroundPadding: 5,
      outerStrokeWidth: 4,
      outerStrokeColor: '#c5f8f4',
      innerStrokeColor: '#03756c',
      innerStrokeWidth: 4,
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
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
