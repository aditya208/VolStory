import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  alert: any;

  // tslint:disable-next-line: max-line-length
  constructor( private fire: AngularFireAuth, public ref: ChangeDetectorRef, public googleplus: GooglePlus, public router: Router ) {
   }

  ngOnInit() {
  }
  /*Login funstion of Facebook*/
  Loginwithfb() {
  this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(async res => {
  const alert = await this.alert.create({
    header : Headers,
    message : '<img src="assets/imgs/003 ALL FINAL VISUALS/visuals-welcome.svg" alt="url" style="border-radius:5px;"/>'
   });
  await alert.present();
  this.router.navigate(['/tab']);
    });
  }
  /*Login function of Google */
  loginWithGoogle() {
    this.googleplus.login({
      webClientId: '786070605930-jgrsj2bi598jgiora9cm5skbe7h7lcou.apps.googleusercontent.com',
      offline: true
    })
    .then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc => {
        this.router.navigate(['/tab']);
      }).catch(err => console.error('Error: ', err));
    });
  }
  skip() {
    this.router.navigate(['/tab']);
  }
}
