import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';


const firebaseConfig = {
  apiKey: 'AIzaSyDnncBSdbGva0YegHuJf-bQfK9klUkbYCM',
  authDomain: 'authenticate-7746a.firebaseapp.com',
  databaseURL: 'https://authenticate-7746a.firebaseio.com',
  projectId: 'authenticate-7746a',
  storageBucket: 'authenticate-7746a.appspot.com',
  messagingSenderId: '786070605930',
  appId: '1:786070605930:web:64c9fea658b9a08256ba13',
  measurementId: 'G-8PETH3RTSD'
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
    ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
