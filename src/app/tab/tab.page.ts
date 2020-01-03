import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabBarChangedEventDetail, TabButtonClickEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {
home = true;
mystory = false;
notification = false;
profile = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('tab/home');
  }
  getTab(tab: string) {
    this.home = false;
    this.mystory = false;
    this.notification = false;
    this.profile = false;
    if (tab === 'home') {
      this.home = true;
    } else if (tab === 'mystory') {
      this.mystory = true;
    } else if (tab === 'notifications') {
      this.notification = true;
    } else {
      this.profile = true;
    }

  }


}
